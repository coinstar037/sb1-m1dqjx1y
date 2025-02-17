import SubnetCalculator from './components/SubnetCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">IP Subnet Calculator</h1>
        <p className="text-lg text-gray-600 mb-8">Calculate Network Information Including Addresses, Hosts, And Subnet Details</p>
        <SubnetCalculator />
      </div>
    </div>
  );
}

export default App;
