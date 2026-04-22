export default function TechDetails() {
  return (
    <div className="min-h-screen bg-[#0f0f11] py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8 border-b-2 border-gray-800 pb-4">
          system architecture
        </h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">frontend layer</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>react.js orchestrated with vite</li>
              <li>tailwind css v4 for utility-first styling</li>
              <li>react router dom for single page navigation</li>
              <li>context api handling global authentication state</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">backend infrastructure</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>node.js runtime with express frameworks</li>
              <li>mongodb for nosql document storage</li>
              <li>json web tokens and bcrypt for secure auth</li>
              <li>cloudinary integration for media asset delivery</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">anti-piracy & ai systems</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>google gemini generating deep vector embeddings</li>
              <li>pinecone database for algorithmic similarity matching</li>
              <li>hostile devtools blocking and ui event suppression</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}