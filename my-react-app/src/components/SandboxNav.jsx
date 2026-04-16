import ColoradoSessionsLogo from "/src/assets/ColoradoSessionsLogo.png"
import Headshot from "/src/assets/headshot.png"
import "/src/App.css"

function SandboxNav() {
  return (
   <nav className="relative bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src={ColoradoSessionsLogo} alt="Your Company" className="h-8 w-auto" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="/overview" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Overview</a>
            <a href="/learned" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Concepts</a>
            <a href="/performances" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Performances</a>
            <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <el-dropdown className="relative ml-3">
          <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img src={Headshot} alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </button>

          <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <a href="https://www.linkedin.com/in/johnsweeks/"target="_blank" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">LinkedIn</a>
            <a href="https://github.com/offthekitchen" target="_blank" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">GitHub</a>
            <a href="https://coloradosessions.com" target="_blank" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Web Site</a>
             <a href="mailto:steve@offthekitchen.com" target="_blank" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Email</a>
         </el-menu>
        </el-dropdown>
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
       <a href="/overview" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Overview</a>
      <a href="/learned" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Concepts</a>
      <a href="/performances" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Performances</a>
      <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a>
    </div>
  </el-disclosure>
</nav>
  )
}

export default SandboxNav
