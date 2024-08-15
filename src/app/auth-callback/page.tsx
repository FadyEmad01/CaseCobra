"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) setConfigId(configurationId);
  }, []);

  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  if (data?.success) {
    if (configId) {
      localStorage.removeItem("configurationId");
      router.push(`/configure/preview?id=${configId}`);
    } else {
      // router.push('/')
    }
  }

  return (
    // <div className='w-full mt-24 flex justify-center'>
    //   <div className='flex flex-col items-center gap-2'>
    //     <Loader2 className='h-8 w-8 animate-spin text-zinc-500' />
    //     <h3 className='font-semibold text-xl'>Logging you in...</h3>
    //     <p>You will be redirected automatically.</p>
    //   </div>
    // </div>
    <MaxWidthWrapper>
      <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
        <li className="relative overflow-hidden lg:flex-1">
          <div>
            <span className="absolute left-0 top-0 h-full w-1  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full bg-primary"></span>
            <span className="lg:pl-9 flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex-shrink-0">
                <Skeleton className="size-20 rounded-lg bg-gray-300" />
              </span>
              <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                <Skeleton className="w-32 h-5 rounded-lg bg-gray-300 mb-2" />

                <Skeleton className="shrink w-52 h-4 rounded-lg bg-gray-300" />
              </span>
            </span>
          </div>
        </li>
        <li className="relative overflow-hidden lg:flex-1">
          <div>
            <span className="absolute left-0 top-0 h-full w-1  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full bg-primary"></span>
            <span className="lg:pl-9 flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex-shrink-0">
                <Skeleton className="size-20 rounded-lg bg-gray-300" />
              </span>
              <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                <Skeleton className="w-48 h-5 rounded-lg bg-gray-300 mb-2" />

                <Skeleton className="w-40 h-4 rounded-lg bg-gray-300" />
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </span>
            </span>
          </div>
        </li>
        <li className="relative overflow-hidden lg:flex-1">
          <div>
            <span className="absolute left-0 top-0 h-full w-1  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full bg-primary"></span>
            <span className="lg:pl-9 flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex-shrink-0">
                <Skeleton className="size-20 rounded-lg bg-gray-300" />
              </span>
              <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                <Skeleton className="w-36 h-5 rounded-lg bg-gray-300 mb-2" />
                <Skeleton className="w-48 h-4 rounded-lg bg-gray-300 mb-2" />
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </span>
            </span>
          </div>
        </li>
      </ol>
      <div className="mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <Skeleton className="max-w-full min-w-[150px]  aspect-[9/18] bg-gray-300 rounded-[32px]" />
        </div>

        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <Skeleton className="w-72 h-9 bg-gray-300 rounded-xl" />
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Skeleton className="w-48 h-5 bg-gray-300 rounded-lg" />
          </div>
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <Skeleton className="w-28 h-5 bg-gray-300 rounded-lg mb-5" />
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <Skeleton className="w-64 h-5 bg-gray-300 rounded-lg mb-2" />
                <Skeleton className="w-52 h-5 bg-gray-300 rounded-lg mb-2" />
                <Skeleton className="w-80 h-5 bg-gray-300 rounded-lg mb-2" />
                <Skeleton className="w-48 h-5 bg-gray-300 rounded-lg mb-2" />
              </ol>
            </div>
            <div>
              <Skeleton className="w-24 h-5 bg-gray-300 rounded-lg mb-5" />
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <Skeleton className="w-52 h-5 bg-gray-300 rounded-lg mb-2" />
                <Skeleton className="w-80 h-5 bg-gray-300 rounded-lg mb-2" />
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <Skeleton className="w-20 h-3 bg-gray-300 rounded-lg mb-2" />

                  <Skeleton className="w-14 h-3 bg-gray-300 rounded-lg mb-2" />
                </div>

                <div className="flex items-center justify-between py-1 mt-2">
                  <Skeleton className="w-28 h-3 bg-gray-300 rounded-lg mb-2" />

                  <Skeleton className="w-12 h-3 bg-gray-300 rounded-lg mb-2" />
                </div>

                <div className="flex items-center justify-between py-1 mt-2">
                  <Skeleton className="w-48 h-3 bg-gray-300 rounded-lg mb-2" />

                  <Skeleton className="w-12 h-3 bg-gray-300 rounded-lg mb-2" />
                </div>

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <Skeleton className="w-24 h-3 bg-gray-300 rounded-lg mb-2" />

                  <Skeleton className="w-12 h-3 bg-gray-300 rounded-lg mb-2" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Skeleton className="w-40 h-9 bg-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
