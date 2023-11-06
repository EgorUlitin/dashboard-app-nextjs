import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import {
  CustomersTableSkeleton,
  InvoicesTableSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table query={query} />
      </Suspense>
      {/* <div className="mt-5 flex w-full justify-center"> */}
      {/* <Pagination totalPages={totalPages} /> */}
      {/* </div> */}
    </div>
  );
}
