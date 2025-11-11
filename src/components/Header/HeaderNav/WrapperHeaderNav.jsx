
export default function WrapperHeaderNav({ children }) {


    return (
        <div className="col-12">
            <nav className="site-navigation text-right ml-auto " role="navigation">
                {children}
            </nav>
        </div>
    )
}