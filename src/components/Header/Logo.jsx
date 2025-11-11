export default function Logo({ text }) {
    return (
        <div className="site-logo">
            <a href="index.html" className="text-black">
                <span className="text-primary">{text}</span>
            </a>
        </div>
    );
}