import {
  faChevronRight,
  faUser,
  faPaintBrush,
  faShieldAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Auth from "../util/auth";

const SettingsSidebar = () => {
  const { setToken, setKeychain } = Auth.useContainer();

  return (
    <div className="w-72 bg-primary-sidebar dark:bg-primary-sidebar-dark p-5 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-5">Settings</h1>
      <div className="flex flex-col gap-5 w-64 bg-primary-sidebar dark:bg-primary-sidebar-dark flex-1">
        <Link href="/app/settings/user">
          <a>
            <div className="flex gap-3 w-full items-center">
              <div className="rounded-xl w-9 h-9 flex items-center justify-center bg-inndigo">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Profile</p>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="ml-auto mr-3" />
            </div>
          </a>
        </Link>
        <div className="flex gap-3 w-full items-center">
          <div className="rounded-xl w-9 h-9 flex items-center justify-center bg-secondary">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Security</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="ml-auto mr-3" />
        </div>
        <div className="flex gap-3 w-full items-center">
          <div className="rounded-xl w-9 h-9 flex items-center justify-center bg-yellow-500">
            <FontAwesomeIcon icon={faPaintBrush} />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Themes</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="ml-auto mr-3" />
        </div>
        <button
          className="flex gap-3 w-full items-center"
          onClick={() => {
            setToken(null);
            setKeychain(null);
          }}
        >
          <div className="rounded-xl w-9 h-9 flex items-center justify-center bg-red-500">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SettingsSidebar;
