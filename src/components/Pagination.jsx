import React, { useEffect } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function SimplePagination({ currentPage, totalPages, setCurrentPage }) {
    const [active, setActive] = React.useState(1);

    useEffect(() => {
        setActive(currentPage);
    }, [currentPage]);

    if(totalPages < currentPage) {
        setCurrentPage(1)
    }

    const next = () => {
        if (active === totalPages) return;
        setActive(active + 1);
        setCurrentPage(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
        setCurrentPage(active - 1);
    };

    const handlePageClick = (page) => {
        setActive(page);
        setCurrentPage(page);
    };

    // Generate page numbers
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center gap-4 mt-4">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <div className="flex items-center gap-1">
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md ${page === active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === totalPages}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}
