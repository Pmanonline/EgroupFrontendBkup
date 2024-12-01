import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { TextInput, Label, Button, Card } from "flowbite-react";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import backendURL from "../../config";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [setGroup, setTotalGroup] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { userInfo } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${backendURL}/api/getUsers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchGroups = async () => {
      try {
        const res = await fetch(`${backendURL}/api/groups/getAllGroups/`);
        const data = await res.json();
        if (res.ok) {
          setTotalGroup(data.length);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchDiscussions = async () => {
      try {
        const res = await fetch(
          `${backendURL}/api/discussions/getAllDiscussions/`
        );
        const data = await res.json();
        if (res.ok) {
          setDiscussion(data.length);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (userInfo) {
      fetchUsers();
      fetchGroups();
      fetchDiscussions();
    }
  }, [userInfo]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontWeight: "bold", // Bold font for table headers
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: "normal", // Normal font for table body, you can change to 'bold' if needed
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mb-12 overflow-x-hidden">
        <div className="flex flex-col p-4 bg-white dark:bg-slate-800 shadow-lg border border-purple rounded-md w-full sm:w-80 md:w-72 lg:w-64">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-gray-500 text-md uppercase">Total Users</h3>
              <p className="text-2xl font-semibold">{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div>Last month</div>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white dark:bg-slate-800 shadow-lg border border-purple rounded-md w-full sm:w-80 md:w-72 lg:w-64">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-gray-500 text-md uppercase">Total Groups</h3>
              <p className="text-2xl font-semibold">{setGroup}</p>
            </div>
            <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div>Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white dark:bg-slate-800 shadow-lg border border-purple rounded-md w-full sm:w-80 md:w-72 lg:w-64">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-gray-500 text-md uppercase">
                Total Discussions
              </h3>
              <p className="text-2xl font-semibold">{discussion}</p>
            </div>
            <HiDocumentText className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div>Last month</div>
          </div>
        </div>
      </div>

      {/* Responsive Users Table */}
      <div className="relative w-full h-full max-w-6xl mx-auto overflow-x-auto overflow-y-auto">
        <div>
          <Card className="w-full lg:col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Recent Users
              </h5>
              <Button as={Link} to="/DashBoard/Users" size="sm" color="purple">
                See all
              </Button>
            </div>

            <div className="min-w-full overflow-x-auto">
              <TableContainer component={Paper}>
                <Table aria-label="recent users table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>User</StyledTableCell>
                      <StyledTableCell align="right">Joined</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <StyledTableRow key={user._id}>
                        <StyledTableCell component="th" scope="row">
                          <div className="flex items-center">
                            {user.image ? (
                              <img
                                src={`${backendURL}/uploads/${user.image}`}
                                alt={user.username}
                                className="w-10 h-10 rounded-full mr-3"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "/fallback-image.png";
                                }}
                              />
                            ) : (
                              <HiOutlineUserCircle className="w-10 h-10 text-gray-400 mr-3" />
                            )}
                            <div>
                              <p className="font-semibold">{user.username}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
