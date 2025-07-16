"use client";
import { Filter, Search, ChevronDown, MoreVertical, Eye, Edit2, Trash2 } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useSession } from "next-auth/react";
import axiosInstance from "@/app/utils/axiosInstance";

type SellerProduct = {
  id: string;
  name: string;
  description?: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  productSKU: string;
  hsnCode: string;
  brand: string;
  variants: {
    id: string;
    price: string;
    stockQuantity: number;
    ProductVariantImage: { 
      imageUrl: string; 
      isPrimary?: boolean 
    }[];
    discounts?: {
      discountType: string;
      discountValue: string;
      startDate: string;
      endDate: string;
    }[];
  }[];
  order?: number;
  GST?: {
    percentage: string;
  };
  seller?: {
    storeName: string;
  };
};

// Custom debounce hook
const useDebounce = <T,>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ProductsPage = () => {
  const router = useRouter();
  // const { data: session, status } = useSession();
  const status = "authenticated";
  const session = {
    user: {
      sellerId: "c6fe18bd-0e74-47f9-b8e1-83f1f93b9760"
    }
  };
  const [sellerProducts, setSellerProducts] = useState<SellerProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<SellerProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Debounce the search term
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    fetchProducts();
  }, [debouncedSearchTerm]);

  const fetchProducts = async () => {
    console.log("fetchProducts");
    if (status !== "authenticated" || !session?.user?.sellerId) {
      setError("Please login as a seller to view products");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("fetchProducts🔥🔥🔥");
      const response: any = await axiosInstance.get(`/seller/fetchSellerProduct/${session.user.sellerId}`);
      console.log("response🔥🔥🔥", response);
      
      if (response?.status === 200) {   
        setSellerProducts(response?.data);
        setFilteredProducts(response?.data);
      } else {
        throw new Error(response?.data?.message || 'Failed to fetch products');
      }
    } catch (err: any) {
      console.error("Error fetching products:", err);
      
      // Handle network errors specifically
      if (err.code === 'ERR_NETWORK' || err.message?.includes('CONNECTION_REFUSED')) {
        setError('Unable to connect to server. Please check if the backend server is running.');
        
        // Provide fallback mock data for development
        const mockData: SellerProduct[] = [
          {
            id: '1',
            name: 'Sample Product 1',
            description: 'This is a sample product for testing',
            isApproved: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            productSKU: 'SKU001',
            hsnCode: 'HSN001',
            brand: 'Sample Brand',
            variants: [
              {
                id: 'v1',
                price: '999.00',
                stockQuantity: 50,
                ProductVariantImage: [
                  {
                    imageUrl: 'https://via.placeholder.com/150',
                    isPrimary: true
                  }
                ]
              }
            ],
            order: 5
          },
          {
            id: '2',
            name: 'Sample Product 2',
            description: 'Another sample product for testing',
            isApproved: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            productSKU: 'SKU002',
            hsnCode: 'HSN002',
            brand: 'Sample Brand',
            variants: [
              {
                id: 'v2',
                price: '1499.00',
                stockQuantity: 25,
                ProductVariantImage: [
                  {
                    imageUrl: 'https://via.placeholder.com/150',
                    isPrimary: true
                  }
                ]
              }
            ],
            order: 2
          }
        ];
        
        setSellerProducts(mockData);
        setFilteredProducts(mockData);
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching products');
      }
    } finally {
      setLoading(false);
    }
  }

 

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentProducts = filteredProducts?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleProductAction = (action: string, productId: string) => {
    switch (action) {
      case 'view':
        router.push(`/seller/sellerproductdetails/${productId}`);
        break;
    }
  };

  const formatPrice = (price: string) => {
    return `₹${parseFloat(price).toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDiscountInfo = (variant: any) => {
    if (variant.discounts && variant.discounts.length > 0) {
      const discount = variant.discounts[0];
      return `${discount.discountValue}% off`;
    }
    return null;
  };

  const LoadingSkeleton = () => (
    <TableRow>
      <TableCell><Skeleton className="h-12 w-12 rounded-lg" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
      <TableCell><Skeleton className="h-6 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[40px]" /></TableCell>
      <TableCell><Skeleton className="h-6 w-[80px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
      <TableCell><Skeleton className="h-8 w-8 rounded" /></TableCell>
    </TableRow>
  );

  // Since status is always "authenticated" in this mock setup, we don't need these checks

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground" aria-label="breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="text-primary hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">Products</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground mt-1">
              Manage your product inventory and listings
            </p>
          </div>

        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
            <p className="font-medium">Error loading products</p>
            <p className="text-sm">{error}</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                  className="pl-10"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={loading}>
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
        {/* Summary Stats */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-foreground">{filteredProducts.length}</div>
              <div className="text-sm text-muted-foreground">Total Products</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-green-600">
                {filteredProducts.filter(p => p.isApproved).length}
              </div>
              <div className="text-sm text-muted-foreground">Published</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-orange-600">
                {filteredProducts.filter(p => !p.isApproved).length}
              </div>
              <div className="text-sm text-muted-foreground">Yet to Publish</div>
            </div>
            {/* <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">
                {filteredProducts.reduce((sum, p) => sum + (p.variants[0]?.stockQuantity || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Stock</div>
            </div> */}
          </div>
        )}

        {/* Products Table */}
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="w-full">
          <Table>
              <TableHeader className="sticky top-0 bg-card z-10 shadow-sm">
              <TableRow className="bg-muted/50">
                <TableHead className="w-16"></TableHead>
                <TableHead className="min-w-[150px]">Product Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Orders</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="w-12">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                // Show loading skeletons
                Array.from({ length: 5 }).map((_, index) => (
                  <LoadingSkeleton key={index} />
                ))
              ) : (
                  currentProducts.map((product) => {
                  // const primaryVariant = product?.variants[0];
                  // const primaryImage = primaryVariant?.ProductVariantImage?.find(img => img.isPrimary)?.imageUrl 
                  //   || primaryVariant?.ProductVariantImage?.[0]?.imageUrl;
                  // const discountInfo = getDiscountInfo(primaryVariant);

                  return (
                    <TableRow key={product.id} className="hover:bg-muted/30 transition-colors ">
                      <TableCell className="w-16">
                      </TableCell>
                       
                      <TableCell>
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                          {/* {primaryImage ? (
                            <img
                              src={primaryImage}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null} */}
                          {/* ${'hidden' ? 'hidden' : ''} */}
                          <img src={product?.images[0]?.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                          
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                            <div className="font-medium text-foreground line-clamp-1">
                            {product.name}
                          </div>
                          {product.description && (
                              <div className="text-sm text-muted-foreground line-clamp-1 max-w-[300px] overflow-hidden text-ellipsis">
                              {product.description}
                            </div>
                          )}
                          
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{product?.price}</span>
                      </TableCell>
                      <TableCell className=" text-center">
                        <span className="text-sm">0</span>
                      </TableCell>
                      <TableCell className="text-center">
                          {product.isApproved ? <span className="border-1 border-white p-2 bg-green-300 rounded-[14px] font-normal">Published</span> :<span className="border-1 border-white p-2 bg-red-300 rounded-[14px] font-normal">Yet To Published</span>}
                        
                      </TableCell>
                     
                      <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleProductAction('view', product.id)}
                          >
                            <Eye className="h-4 w-4" />
                            </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>

          {!loading && filteredProducts.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-2">No products found</div>
              <div className="text-sm text-muted-foreground">
                {searchTerm ? 'Try adjusting your search terms' : 'Start by adding your first product'}
              </div>
            </div>
          )}
        </div>

          {/* Pagination Controls */}
          {!loading && filteredProducts.length > 0 && (
            <div className="flex items-center justify-between px-4 py-4 border-t">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">Rows per page:</p>
                <Select
                  value={rowsPerPage.toString()}
                  onValueChange={handleRowsPerPageChange}
                >
                  <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder={rowsPerPage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length}
                </p>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={pageNumber === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
            </div>
              </div>
            </div>
          )}
              </div>

      </div>
    </div>
  );
};

export default ProductsPage;
