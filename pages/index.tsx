import React from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container p-8 mx-auto space-y-12">
        <div className="space-y-8 text-center">
          <div className="flex justify-center">
            <Image
              src="/tw-logo.png"
              alt="TradeWizz Logo"
              width={120}
              height={120}
              className="mb-4"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              TradeWizz Dashboard
            </h1>
            <div className="relative">
              <div className="mx-auto mb-4 w-48 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <p className="text-xl italic font-medium text-purple-600">
                One app to rule them all
              </p>
              <div className="mx-auto mt-4 w-48 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mx-auto max-w-4xl md:grid-cols-2">
          {/* Value Proposition Card */}
          <Link href="/value-proposition" className="block h-full">
            <Card className="p-6 h-[200px] bg-gradient-to-br from-purple-50 to-white border-purple-100 transition-all duration-300 cursor-pointer hover:shadow-lg group flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="flex justify-between items-center text-2xl font-semibold text-gray-900">
                  Value Proposition
                  <ArrowRight className="w-5 h-5 text-purple-600 transition-transform transform group-hover:translate-x-1" />
                </h2>
                <p className="text-gray-600">
                  Explore our unique value proposition and core offerings
                </p>
              </div>
            </Card>
          </Link>

          {/* Financial Projections Card */}
          <Link href="/financial-projections" className="block h-full">
            <Card className="p-6 h-[200px] bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100 transition-all duration-300 cursor-pointer hover:shadow-lg group flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="flex justify-between items-center text-2xl font-semibold text-gray-900">
                  Financial Projections
                  <ArrowRight className="w-5 h-5 text-fuchsia-600 transition-transform transform group-hover:translate-x-1" />
                </h2>
                <p className="text-gray-600">
                  Analyze financial metrics and business performance
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 