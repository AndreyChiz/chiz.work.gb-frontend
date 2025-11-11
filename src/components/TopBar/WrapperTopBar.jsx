
export default function WrapperTopBar({ children }) {

    return (
        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}