import UploadForm from "../Components/UploadForm";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Mkulima AI
        </h1>

        <p className="text-gray-600 mb-8">
          Smart forestry and weather risk insights for farmers.
        </p>

        <UploadForm />
      </div>
    </div>
  );
}

export default Home;