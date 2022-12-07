import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";



export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'username', width: 200, renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
      ];
      
      const rows = [
        {
            id: 1,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 2,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 3,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 4,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 5,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 6,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 7,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 8,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 9,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 10,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
      ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}