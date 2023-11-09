export default function Button ({ children, ...props }) {
  return <button className='p-2 py-1 rounded-md text-white bg-blue-500 active:scale-90 transition-transform' {...props}>{children}</button>
}
