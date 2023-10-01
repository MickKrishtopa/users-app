import "./App.scss";
import { requestUsers, requestUsersWithError, User, Query } from "../../api";
import { UserList } from "../UserList/UserList";
import { FilterArea } from "../FiltersArea/FilterArea";
import { Pagination } from "../Pagination/Pagination";
import { User as userInterface } from "../../api";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Requirements from "../../Requirements";
import { useEffect, useState } from "react";

export type filtersType = {
    name: string;
    age: string;
};

const initialFilters = {
    name: "",
    age: "",
};

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [users, setUsers] = useState<userInterface[]>([]);
    const [filters, setFilters] = useState<filtersType>(initialFilters);
    const [page, setPage] = useState<number>(0);
    const [itemPerPage, setItemPerPage] = useState<number>(5);

    const onChangePageBtnClick = (action: string): void => {
        switch (action) {
            case "next":
                if (users.length === 0) {
                    break;
                }
                setPage(page + itemPerPage);
                break;
            case "prev":
                if (page - itemPerPage < 0) {
                    setPage(0);
                    break;
                }
                setPage(page - itemPerPage);
                break;
            default:
                break;
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await requestUsers({
                name: filters.name,
                age: filters.age,
                limit: itemPerPage,
                offset: page,
            });
            setUsers(res);

            // const res = await requestUsersWithError();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Error");
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // console.log({
        //   name: filters.name,
        //   age: filters.age,
        //   limit: itemPerPage,
        //   offset: page
        // });
        setError("");
        fetchData();
    }, [filters, page, itemPerPage]);

    return (
        <>
            <Header
                title={"Users-app"}
                link={"https://github.com/MickKrishtopa/users-app"}
            />
            <main className="main">
                <FilterArea filters={filters} setFilters={setFilters} />
                <UserList
                    userToShow={users}
                    isLoading={isLoading}
                    error={error}
                />
                <Pagination
                    page={page === 0 ? 1 : Math.ceil(page / itemPerPage) + 1}
                    setItemPerPage={setItemPerPage}
                    onChangePageBtnClick={onChangePageBtnClick}
                    isLoading={isLoading}
                />
            </main>
            <Footer
                name={"Mikhail Krishtopa"}
                link={"https://github.com/MickKrishtopa"}
            />
        </>
    );

    // return <Requirements />;
}
