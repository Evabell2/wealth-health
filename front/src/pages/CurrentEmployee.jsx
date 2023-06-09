import { useState } from 'react'
import DataTable from 'react-data-table-component'

function CurrentEmployee() {
    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true
        }
    ]
    // const employee = {
    //     firstName: props.firstName,
    //     lastName: props.lastName,
    //     dateOfBirth: props.dateOfBirth,
    //     startDate: props.startDate,
    //     department: props.department,
    //     street: props.street,
    //     city: props.city,
    //     state: props.state,
    //     zipCode: props.zipCode
    // }
    const data = [
        {
            id: 1,
            firstName: 'Eva',
            lastName: 'Bellouard',
            startDate: '02/07/2021',
            department: 'Finistère',
            dateOfBirth: '07/08/2000',
            street: '55 rue loutre',
            city: 'Quimper',
            state: 'Alaska',
            zipCode: 29000
        },
        {
            id: 2,
            firstName: 'ynna',
            lastName: 'Bellouard',
            startDate: '02/07/2015',
            department: 'Finistère',
            dateOfBirth: '07/08/1999',
            street: '45 rue loutre',
            city: 'Quimper',
            state: 'Alaska',
            zipCode: 29000
        }
    ]
    const [search, setSearch] = useState(data)
    const searchFilter = (event) => {
        const textValue = event.target.value.toLowerCase();
        const filteredData = data.filter(row => {
            return row.firstName.toLowerCase().includes(textValue);
        })
        setSearch(textValue.length > 0 ? filteredData : data);
    }
    return (
        <div id='table'>
            <div id='btn_search'>
                <input type="text" onChange={searchFilter} />
            </div>
            <DataTable
                columns={columns}
                data={search}
                pagination
            ></DataTable>
        </div>
    )
}
export default CurrentEmployee;