import Link from "./Link"
import { navigationList } from "../../share/navigationList"

const Navigation = () => {
  return (
    <nav>
        <ul className="flex gap-4">
            {navigationList.map((item) => (
                <li>
                    <Link path={item.path} className="ml">{item.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navigation