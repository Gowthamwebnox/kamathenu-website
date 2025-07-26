import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2, AlertCircle, XCircle, FileEdit } from "lucide-react";
import Link from "next/link";

interface SellerStatusProps {
  isSeller: boolean;
  isSellerApproved: boolean;
  sellerStatus?: string;
  onUpdateApplication?: () => void;
}

export function SellerStatus({ isSeller, isSellerApproved, sellerStatus, onUpdateApplication }: SellerStatusProps) {
  if (!isSeller) {
    return null;
  }
console.log("sellerStatus",sellerStatus);

  if (sellerStatus === "ON_HOLD") {
    return (
      <div className="flex flex-col items-center gap-4 w-full min-h-[35rem] justify-center">
        <div className="p-4 bg-yellow-100 rounded-full">
          <Clock className="w-12 h-12 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Account On Hold
        </h2>
        <p className="text-gray-600 max-w-md">
          Your seller account is currently on hold. Our team is reviewing your account. 
          We'll notify you once the review is complete.
        </p>
        <div className="flex items-center gap-2 text-yellow-600">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Status: On Hold</span>
        </div>
      </div>
    );
  }

  if (sellerStatus === "REJECTED") {
    return (
      <div className="flex flex-col items-center gap-4 w-full min-h-[35rem] justify-center">
        <div className="p-4 bg-red-100 rounded-full">
          <XCircle className="w-12 h-12 text-red-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Application Rejected
        </h2>
        <p className="text-gray-600 max-w-md">
          We're sorry, but your seller account application has been rejected. Please review our seller guidelines and submit a new application with the required information.
        </p>
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Status: Rejected</span>
        </div>
        <Button size="lg" className="mt-4" variant="destructive" onClick={onUpdateApplication}>
          Submit New Application
        </Button>
      </div>
    );
  }

  if (sellerStatus === "RESUBMIT") {
    return (
      <div className="flex flex-col items-center gap-4 w-full min-h-[35rem] justify-center">
        <div className="p-4 bg-orange-100 rounded-full">
          <FileEdit className="w-12 h-12 text-orange-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Additional Information Required
        </h2>
        <p className="text-gray-600 max-w-md">
          Your seller account application needs additional information. Please review the feedback and submit the required details to complete your application.
        </p>
        <div className="flex items-center gap-2 text-orange-600">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Status: Resubmission Required</span>
        </div>
        <Button size="lg" className="mt-4" variant="outline" onClick={onUpdateApplication}>
          Update Application
        </Button>
      </div>
    );
  }

  if (!isSellerApproved) {
    return (
      <div className="flex flex-col items-center gap-4 w-full min-h-[35rem] justify-center">
        <div className="p-4 bg-yellow-100 rounded-full">
          <Clock className="w-12 h-12 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Account Under Review
        </h2>
        <p className="text-gray-600 max-w-md">
          Your seller account is currently under review. Our team is verifying your details. 
          This process usually takes 24-48 hours. We'll notify you once your account is approved.
        </p>
        <div className="flex items-center gap-2 text-yellow-600">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Status: Pending Approval</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full min-h-[35rem] justify-center">
      <div className="p-4 bg-green-100 rounded-full">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">
        Account Approved!
      </h2>
      <p className="text-gray-600 max-w-md">
        Congratulations! Your seller account has been approved. You can now start managing your store and selling products.
      </p>
      <Link href="/seller">
        <Button size="lg" className="mt-4">
          Go to Seller Dashboard
        </Button>
      </Link>
    </div>
  );
} 