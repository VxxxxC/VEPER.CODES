import { Fragment, useEffect, useState } from "react";
import { IoLogoGithub, IoMenu } from "react-icons/io5/index";
import { Menu, Transition } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";

function HeaderComponent() {
  const headerItems = ["Home", "Works", "Project", "Blog"];

  const [page, setPage]: any = useState("");

  useEffect(() => {
    const local = window.location.pathname;

    if (local == "/") {
      localStorage.setItem("page", "Home");
      setPage("Home");
    } else {
      setPage(localStorage.getItem("page"));
    }
  }, []);

  return (
    <Menu>
      <Menu.Button
        className="relative p-3 rounded-lg border border-gray-400 dark:border-gray-600 dark:hover:bg-zinc-600 hover:bg-zinc-300 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 dark:focus:ring-violet-700 transition duration-300"
        aria-label="drop down menu"
      >
        <IoMenu size={20} />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-5 z-20 w-56 p-3 flex flex-col rounded-xl dark:bg-neutral-700 bg-neutral-400 dark:text-white text-black bg-opacity-30">
          {headerItems.map((item) => {
            const checkClick = item === page;
            return (
              <Menu.Item>
                {({ active }) => (
                  <button onClick={() => localStorage.setItem("page", item)}>
                    <a
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      data-astro-prefetch
                      className={`${
                        checkClick
                          ? "dark:bg-white dark:text-black bg-black text-white font-black"
                          : "hover:underline hover:decoration-2 hover:underline-offset-8"
                      } cursor-pointer w-[200px] h-[50px] px-5 flex items-center`}
                    >
                      {item}{" "}
                    </a>
                  </button>
                )}
              </Menu.Item>
            );
          })}
          <a
            href="https://github.com/vxxxxc/veper.code"
            className="dark:text-gray-400 p-2 flex rounded-xl dark:hover:bg-gray-600 hover:bg-white justify-center items-center"
          >
            SOURCE{" "}
            <span className="px-2">
              <IoLogoGithub size={24} />
            </span>
          </a>
          <div className="mobile:visible mobile:flex mobile:justify-center hidden">
            <ThemeToggle />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderComponent;
