export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-center py-6 text-gray-300">
      <p className="text-sm">
        © Sibasish Chakraborti. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-4 mt-3">
        
          
        

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/sibasish-chakraborti-5b55b82b1" 
          target="_blank" 
          className="text-gray-300 hover:text-white transition gap-2 flex flex-row"
        >
          <img src="/Linkdin.png" className="h-[30px]" alt="" />
          <span className="text-gray-400 text-xl font-bold">Linkdin</span>
        </a>
      </div>
    </footer>
  );
}
