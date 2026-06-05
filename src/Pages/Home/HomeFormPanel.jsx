import UploadForm from "../../Components/UploadForm";

function HomeFormPanel() {
  return (
    <div className="lg:col-span-5 w-full">
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all duration-300">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-950">
            Analyze Your Farm
          </h2>
          <p className="text-sm text-emerald-800/60 mt-1">
            Upload a clear drone or satellite image of your field.
          </p>
        </div>

        <UploadForm />
      </div>
    </div>
  );
}

export default HomeFormPanel;
