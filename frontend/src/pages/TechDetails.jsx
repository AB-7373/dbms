export default function TechDetails() {
  return (
    <div className="min-h-screen bg-sb-bg text-sb-text relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sb-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sb-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-8 border-b-4 border-sb-border pb-8 tracking-wide">
          SYSTEM ARCHITECTURE
        </h1>
        <div className="space-y-8">
          <div className="bg-sb-surface border border-sb-border p-8 rounded-2xl transition-all hover:border-sb-primary">
            <h2 className="text-2xl font-bold text-white mb-6">Frontend & Physical Security</h2>
            <ul className="space-y-4 text-sb-text-muted">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">React.js & Vite Build Engine</strong>
                  high-performance client application styled with tailwind css v4. features a secure authentication flow utilizing google oauth and jwt with otp verification.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">Physical Content Blocking</strong>
                  client-side defensive posture including screenshot blackout mechanisms, context menu blocking, and hostile devtools traps to prevent raw dom inspection and content scraping.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-sb-surface border border-sb-border p-8 rounded-2xl transition-all hover:border-sb-primary">
            <h2 className="text-2xl font-bold text-white mb-6">Backend Infrastructure</h2>
            <ul className="space-y-4 text-sb-text-muted">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">Node.js API & MongoDB</strong>
                  express-based gateway managing collections for users, sessions, assets, claims, and reports. handles complex routing for encrypted content streams.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">Cloudinary & OpenCV</strong>
                  direct-to-cloud asset ingestion Pipeline. utilizes opencv for intermediate image processing and frame extraction before cryptographic watermarking.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-sb-surface border border-sb-border p-8 rounded-2xl transition-all hover:border-sb-primary">
            <h2 className="text-2xl font-bold text-white mb-6">Two-Layer Violation Detection</h2>
            <ul className="space-y-4 text-sb-text-muted">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">Layer 1: Embedding Based Similarity Checks</strong>
                  utilizing gemini-embeddings-02 for multimodal vectorization. generates 3072-dimensional float arrays stored in a pinecone vector database to execute high-speed cosine similarity searches for derivative or modified media.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-2 shrink-0"/>
                <div>
                  <strong className="text-gray-300 block mb-1">Layer 2: Encrypted User ID in Content Stream</strong>
                  leveraging facebook's videoseal model to cryptographically embed the active session's user id directly into the pixel data of the stream, ensuring immediate identification of the source of any direct leakage.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}