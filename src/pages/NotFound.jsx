function NotFound() {
  return (
    <section className="flex justify-center px-2 pt-8 pb-6 transition-colors duration-200">
      <div className="flex flex-col items-center justify-center w-full max-w-sm text-center bg-[#f0f0f0] shadow-2xl rounded-2xl space-y-4 p-4 mx-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg">Page Not Found.</p>
      </div>
    </section>
  );
}

export default NotFound;