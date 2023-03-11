export default function Footer({copyright}) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-s leading-5 text-gray-500">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
