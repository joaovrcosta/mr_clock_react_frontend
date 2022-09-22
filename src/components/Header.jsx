export default function Header() {
  return (
    <header>
      <div className="flex justify-center py-6 border border-b-slate-400">
        <h1 className="text-4xl mr-12">Mr.Clock</h1>
        <input type="text" className="border border-black mr-12 p-1"placeholder="Pesquisar" />
        <ul className="flex space-x-8 justify-center items-center max-w-4xl">
          <li><a href="">LANÇAMENTOS</a></li>
          <li><a href="">RELÓGIOS MASCULINOS</a></li>
          <li><a href="">RELÓGIOS FEMININOS</a></li>
          <li><a className="text-cyan-600" href="/login">LOGIN</a></li>
        </ul>
      </div>
    </header>
  )
}