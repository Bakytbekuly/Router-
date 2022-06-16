import React, { useState } from 'react'

export const BlogFilter = ({ setSearchParams, postQuery, latest }) => {
    const [search, setSeartch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {}

        if (query.length) params.post = query;
        if (isLatest) params.latest = true


        setSearchParams(params)
    }

    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type="search" name='search' value={search} onChange={(e) => setSeartch(e.target.value)} />
                <label style={{ padding: '0 1rem' }}>
                    <input type="checkbox" name="latest" value={checked} onChange={(e) => setChecked(e.target.checked)} /> New only
                </label>
                <input type="submit" value="Search" />

            </form>

        </div>
    )
}
