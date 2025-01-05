const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-gradient-to-br from-black to-blue-950 bg-cover bg-fixed bg-center">
      {children}
    </div>
  )
}

export default Layout