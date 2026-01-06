export default function Footer(): JSX.Element {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-700">© Copyright 2015 by <span className="font-medium">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="mt-3 md:mt-0 text-sm" style={{color: '#777', textAlign: 'right'}}>
          <a href="/transparency-in-coverage">Transparency in Coverage</a>
        </div>
      </div>
      <div className="text-center py-4">
        <a href="#" className="text-sm text-gray-500">Back to top</a>
      </div>
    </footer>
  );
}
