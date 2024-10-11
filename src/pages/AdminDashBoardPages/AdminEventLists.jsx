// import React, { useState, useEffect } from "react";
// import { BiMessageSquareAdd } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Typography,
//   Box,
//   Tab,
//   Tabs,
// } from "@mui/material";

// const backendURL =
//   import.meta.env.MODE === "production"
//     ? import.meta.env.VITE_BACKEND_URL
//     : "http://localhost:3001";

// const AdminEventLists = () => {
//   const [groups, setGroups] = useState([]);
//   const [discussions, setDiscussions] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [selectedDiscussion, setSelectedDiscussion] = useState(null);
//   const [tabValue, setTabValue] = useState(0);

//   useEffect(() => {
//     fetchGroups();
//     fetchAllDiscussions();
//   }, []);

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get(`${backendURL}/api/groups/getAllGroups`);
//       setGroups(response.data);
//     } catch (error) {
//       console.error("Error fetching groups:", error);
//     }
//   };

//   const fetchAllDiscussions = async () => {
//     try {
//       const response = await axios.get(
//         `${backendURL}/api/discussions/getAllDiscussions`
//       );
//       setDiscussions(response.data);
//     } catch (error) {
//       console.error("Error fetching discussions:", error);
//     }
//   };
//   console.log(discussions);

//   const fetchDiscussionsByGroup = async (groupSlug) => {
//     try {
//       const response = await axios.get(
//         `${backendURL}/api/groups/${groupSlug}/discussions`
//       );
//       setDiscussions(response.data);
//     } catch (error) {
//       console.error("Error fetching discussions by group:", error);
//     }
//   };

//   const fetchComments = async (discussionId) => {
//     try {
//       const response = await axios.get(
//         `${backendURL}/api/discussions/getDiscussionComments/${discussionId}`
//       );
//       setComments(response.data.comments);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const handleDeleteDiscussion = async (discussionId) => {
//     try {
//       await axios.delete(`${backendURL}/api/discussions/${discussionId}`);
//       setDiscussions(discussions.filter((d) => d._id !== discussionId));
//     } catch (error) {
//       console.error("Error deleting discussion:", error);
//     }
//   };

//   const handleDeleteComment = async (discussionId, commentId) => {
//     try {
//       await axios.delete(
//         `${backendURL}/api/discussions/${discussionId}/comments/${commentId}/delete`
//       );
//       setComments(comments.filter((c) => c._id !== commentId));
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <>
//       <Link to="/DashBoard/Admin/CreateGroup">
//         <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20%] mid:w-[30%] py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-3 mb-7">
//           <span className="flex whitespace-nowrap">
//             <BiMessageSquareAdd className="mr-2" size={20} />
//             Create Group
//           </span>
//         </button>
//       </Link>
//       <Box sx={{ width: "100%" }}>
//         <Tabs value={tabValue} onChange={handleTabChange}>
//           <Tab label="Groups" />
//           <Tab label="Discussions" />
//           <Tab label="Comments" />
//         </Tabs>

//         {tabValue === 0 && (
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Description</TableCell>
//                   <TableCell>Members</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {groups.map((group) => (
//                   <TableRow key={group._id}>
//                     <TableCell>{group.name}</TableCell>
//                     <TableCell>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: group.description,
//                         }}
//                       />
//                     </TableCell>

//                     <TableCell>{group.members.length}</TableCell>
//                     <TableCell>
//                       <Button
//                         onClick={() => {
//                           setSelectedGroup(group);
//                           fetchDiscussionsByGroup(group.slug);
//                           setTabValue(1);
//                         }}
//                       >
//                         View Discussions
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}

//         {tabValue === 1 && (
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Title</TableCell>
//                   <TableCell>Author</TableCell>
//                   <TableCell>Group</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {discussions.map((discussion) => (
//                   <TableRow key={discussion._id}>
//                     <TableCell>{discussion.title}</TableCell>
//                     <TableCell>{discussion.author.username}</TableCell>
//                     <TableCell>{discussion.group.name}</TableCell>
//                     <TableCell>
//                       <Button
//                         onClick={() => {
//                           setSelectedDiscussion(discussion);
//                           fetchComments(discussion._id);
//                           setTabValue(2);
//                         }}
//                       >
//                         View Comments
//                       </Button>
//                       <Button
//                         onClick={() => handleDeleteDiscussion(discussion._id)}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}

//         {tabValue === 2 && (
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Content</TableCell>
//                   <TableCell>Author</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {comments.map((comment) => (
//                   <TableRow key={comment._id}>
//                     <TableCell>{comment.content}</TableCell>
//                     <TableCell>{comment.author.username}</TableCell>
//                     <TableCell>
//                       <Button
//                         onClick={() =>
//                           handleDeleteComment(
//                             selectedDiscussion._id,
//                             comment._id
//                           )
//                         }
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Box>
//     </>
//   );
// };

// export default AdminEventLists;\

import React, { useState, useEffect } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Tab,
  Tabs,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const backendURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:3001";

const AdminEventLists = () => {
  const [groups, setGroups] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const userId = userInfo?.user?._id;

  useEffect(() => {
    fetchGroups();
    fetchAllDiscussions();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/groups/getAllGroups`);
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const fetchAllDiscussions = async () => {
    try {
      const response = await axios.get(
        `${backendURL}/api/discussions/getAllDiscussions`
      );
      setDiscussions(response.data);
    } catch (error) {
      console.error("Error fetching discussions:", error);
    }
  };

  const fetchDiscussionsByGroup = async (groupSlug) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/groups/${groupSlug}/discussions`
      );
      setDiscussions(response.data);
    } catch (error) {
      console.error("Error fetching discussions by group:", error);
    }
  };

  const fetchComments = async (discussionId) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/discussions/getDiscussionComments/${discussionId}`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDeleteGroup = async (groupId) => {
    try {
      await axios.delete(`${backendURL}/api/groups/deleteGroup/${groupId}`);
      console.log(groupId);
      setGroups(groups.filter((g) => g._id !== groupId));
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  const handleDeleteDiscussion = async (discussionId) => {
    try {
      await axios.delete(
        `${backendURL}/api/groups/deleteDiscussion/${discussionId}`
      );
      setDiscussions(discussions.filter((d) => d._id !== discussionId));
    } catch (error) {
      console.error("Error deleting discussion:", error);
    }
  };

  const handleDeleteComment = async (discussionId, commentId) => {
    try {
      await axios.delete(
        `${backendURL}/api/discussions/${discussionId}/comments/${commentId}/delete`,
        {
          data: { userId },
        }
      );
      setComments(comments.filter((c) => c._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDeleteDialog = (item, type) => {
    setItemToDelete(item);
    setDeleteType(type);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setItemToDelete(null);
    setDeleteType("");
  };

  const handleConfirmDelete = async () => {
    if (deleteType === "group") {
      await handleDeleteGroup(itemToDelete._id);
    } else if (deleteType === "discussion") {
      await handleDeleteDiscussion(itemToDelete._id);
    } else if (deleteType === "comment") {
      await handleDeleteComment(selectedDiscussion._id, itemToDelete._id);
    }
    handleCloseDeleteDialog();
  };

  return (
    <>
      <Link to="/DashBoard/Admin/CreateGroup">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20%] mid:w-[30%] py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-3 mb-7">
          <span className="flex whitespace-nowrap">
            <BiMessageSquareAdd className="mr-2" size={20} />
            Create Group
          </span>
        </button>
      </Link>
      <Box sx={{ width: "100%" }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Groups" />
          <Tab label="Discussions" />
          <Tab label="Comments" />
        </Tabs>

        {tabValue === 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Members</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groups.map((group) => (
                  <TableRow key={group._id}>
                    <TableCell>{group.name}</TableCell>
                    <TableCell>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: group.description,
                        }}
                      />
                    </TableCell>
                    <TableCell>{group.members.length}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setSelectedGroup(group);
                          fetchDiscussionsByGroup(group.slug);
                          setTabValue(1);
                        }}
                      >
                        View Discussions
                      </Button>
                      <Button
                        onClick={() => handleOpenDeleteDialog(group, "group")}
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {tabValue === 1 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Group</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {discussions.map((discussion) => (
                  <TableRow key={discussion._id}>
                    <TableCell>{discussion.title}</TableCell>
                    <TableCell>{discussion.author.username}</TableCell>
                    <TableCell>{discussion.group.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setSelectedDiscussion(discussion);
                          fetchComments(discussion._id);
                          setTabValue(2);
                        }}
                      >
                        View Comments
                      </Button>
                      <Button
                        onClick={() =>
                          handleOpenDeleteDialog(discussion, "discussion")
                        }
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {tabValue === 2 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Content</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comments.map((comment) => (
                  <TableRow key={comment._id}>
                    <TableCell>{comment.content}</TableCell>
                    <TableCell>{comment.author.username}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleOpenDeleteDialog(comment, "comment")
                        }
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this {deleteType}? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminEventLists;
