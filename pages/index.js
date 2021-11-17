import Header from '../components/header'
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2780208

function HomePage() {
  return (
  <>
    <Header />
    <div className="flex flex-col p-4">
      <div className="prose mx-auto">
        <p className="text-gray-900 text-xl">Think building websites using the <a href="https://jamstack.org/">Jamstack</a> &amp; coding React components or even just a little CSS or HTML is complicated and better left to professional web developers?</p>
        <p className="text-gray-900 text-xl">Think <em>you</em> don't have the skills or understanding to build your own site on using modern, fast, secure, &amp; Google-compliant approach?</p>
        <p className="font-bold uppercase text-2xl">Think again!</p>
        <p><span className="font-bold">YOU CAN BUILD A GREAT WEBSITE &hellip;</span> and take advantage of the same blazing fast technologies that the heavy hitters use. Free tutorials, guides, and an A-to-Z book that'll explain it all in simple-to-understand plain English.</p>
        <p>Used by Peloton, Logger MTS, Louis Vuitton, Leonardo DiCaprio Foundation, TakeShape.io, Fabuwood, Right From Basics, Easyship, Ingmarson, JFK Terminal 4. <span className="text-gray-400 text-sm italic">(source:&nbsp;<a href="https://naturaily.com/blog/top-10-websites-built-on-jamstack">Naturally.com</a>)</span></p>
      </div>
      <ConvertKitForm template="cocoa" borderRadius={10} formId={MY_FORM_ID} />
    </div>
  </>
  )
}

export default HomePage