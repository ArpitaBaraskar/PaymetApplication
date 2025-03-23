import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, ArrowUpRight, ArrowDownLeft, LogOut } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold">Fast Pay</span>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Wallet Balance</h2>
            <p className="text-4xl font-bold text-indigo-600 mt-2">$1,234.56</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              onClick={() => navigate('/transaction')}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <ArrowUpRight className="h-8 w-8 text-green-500" />
                <span className="ml-3 text-lg font-medium">Send Money</span>
              </div>
            </button>

            <button
              onClick={() => navigate('/transaction')}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <ArrowDownLeft className="h-8 w-8 text-blue-500" />
                <span className="ml-3 text-lg font-medium">Request Money</span>
              </div>
            </button>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${i % 2 === 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                        {i % 2 === 0 ? (
                          <ArrowUpRight className={`h-5 w-5 ${i % 2 === 0 ? 'text-green-500' : 'text-red-500'}`} />
                        ) : (
                          <ArrowDownLeft className={`h-5 w-5 ${i % 2 === 0 ? 'text-green-500' : 'text-red-500'}`} />
                        )}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {i % 2 === 0 ? 'Sent to' : 'Received from'} John Doe
                        </p>
                        <p className="text-sm text-gray-500">March {i}, 2024</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${i % 2 === 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {i % 2 === 0 ? '-' : '+'}$50.00
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;