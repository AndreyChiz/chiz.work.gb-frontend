function NavItem({ item }) {
    const hasChildren = item.children && item.children.length > 0;

    return (
        <li className={hasChildren ? "has-children" : ""}>
            <a href={item.href} className="nav-link">
                {item.label}
            </a>
            {hasChildren && (
                <ul className={`dropdown${item.depth === 1 ? " arrow-top" : ""}`}>
                    {item.children.map((child, index) => (
                        <NavItem key={index} item={{ ...child, depth: (item.depth || 0) + 1 }} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function HeaderNavMenu({menuItems}) {

    return (
        
            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                {menuItems.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>
        
    );
}
