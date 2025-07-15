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
import { useSession } from "next-auth/react";
import axios from "axios";

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
  const status="loading"
  const session={
    user:{
      sellerId:"123"
    }
  }
  const [sellerProducts, setSellerProducts] = useState<SellerProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<SellerProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Debounce the search term
  const debouncedSearchTerm = useDebounce(searchTerm);

  const fetchProducts = useCallback(async () => {
    if (status === "loading") return;
    
    if (status !== "authenticated" || !session?.user?.sellerId) {
      setError("Please login as a seller to view products");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response:any = await axios.get(`/api/seller/products`, {
        params: {
          sellerid: session.user.sellerId,
          search: debouncedSearchTerm || undefined
        }
      });

      if (response?.data?.status === 'success') {   
        setSellerProducts(response?.data?.data);
        setFilteredProducts(response?.data?.data);
      } else {
        throw new Error(response?.data?.message || 'Failed to fetch products');
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching products');
    } finally {
      setLoading(false);
    }
  }, [session, status, debouncedSearchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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

  // Show authentication error or loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="space-y-4 text-center">
          <Skeleton className="h-12 w-12 rounded-full mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px] mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
          <p className="text-muted-foreground">Please login as a seller to view products</p>
          <Button onClick={() => router.push('/login')}>
            Login
          </Button>
        </div>
      </div>
    );
  }

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
                  placeholder="Search products, brands, or SKU..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                  className="pl-10"
                  disabled={loading || status !== "authenticated"}
                />
              </div>
            </div>
            {/* <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={loading}>
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" disabled={loading}>
                    Sort by
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Name A-Z</DropdownMenuItem>
                  <DropdownMenuItem>Name Z-A</DropdownMenuItem>
                  <DropdownMenuItem>Price Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Recently Added</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>
        {/* Summary Stats */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <div className="text-sm text-muted-foreground">Draft</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">
                {filteredProducts.reduce((sum, p) => sum + (p.variants[0]?.stockQuantity || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Stock</div>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="w-full">
          <Table>
              <TableHeader className="sticky top-0 bg-card z-10 shadow-sm">
              <TableRow className="bg-muted/50">
              <TableHead>SKU</TableHead>
                <TableHead className="w-16"></TableHead>
                <TableHead className="min-w-[200px]">Product</TableHead>
                <TableHead>HSN Code</TableHead>             
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Stock</TableHead>
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
                  const primaryVariant = product.variants[0];
                  const primaryImage = primaryVariant?.ProductVariantImage?.find(img => img.isPrimary)?.imageUrl 
                    || primaryVariant?.ProductVariantImage?.[0]?.imageUrl;
                  const discountInfo = getDiscountInfo(primaryVariant);

                  return (
                    <TableRow key={product.id} className="hover:bg-muted/30 transition-colors">
                       <TableCell>
                        <span className="font-mono text-sm text-muted-foreground">
                          {product.productSKU}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                          {primaryImage ? (
                            <img
                              src={primaryImage}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          <div className={`w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs ${primaryImage ? 'hidden' : ''}`}>
                            No Image
                          </div>
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
                          {discountInfo && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                              {discountInfo}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{product.hsnCode}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{product.brand}</span>
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-foreground">
                          {formatPrice(primaryVariant?.price || "0")}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge 
                          variant={primaryVariant?.stockQuantity > 10 ? "default" : primaryVariant?.stockQuantity > 0 ? "secondary" : "destructive"}
                          className="font-mono"
                        >
                          {primaryVariant?.stockQuantity || 0}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-medium">{product.order || 0}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={product.isApproved ? "default" : "secondary"}>
                          {product.isApproved ? "Published" : "Draft"}
                        </Badge>
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
