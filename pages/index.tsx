import React from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          TradeWizz Dashboard
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Current Status Card */}
          <Link href="/mrr-dashboard" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center justify-between">
                  Current Status
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-gray-600">
                  View current MRR analytics and performance metrics
                </p>
              </div>
            </Card>
          </Link>

          {/* Future Status Card */}
          <Link href="/future-status" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center justify-between">
                  Future Status
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-gray-600">
                  Explore pre-seed valuation and future projections
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