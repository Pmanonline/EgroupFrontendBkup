import React, { useState, useEffect } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import backendURL from "../../config";
import { toast } from "react-toastify";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Tab,
  Tabs,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Alert,
} from "@mui/material";

const AdminGroupDetails = () => {
  // State Management
  const [groups, setGroups] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?._id;
  const email = userInfo?.email;
  const username = userInfo?.username;

  // API Calls with Error Handling
  const fetchGroups = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${backendURL}/api/groups/getAllGroups`);
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch groups");
      toast.error("Failed to fetch groups");
    } finally {
      setLoading(false);
    }
  };

  const fetchDiscussionsByGroup = async (groupId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${backendURL}/api/groups/getDiscussionsByGroup/${groupId}`
      );
      setDiscussions(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch discussions");
      toast.error("Failed to fetch discussions");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllDiscussions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${backendURL}/api/discussions/getAllDiscussions`
      );
      setDiscussions(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch discussions");
      toast.error("Failed to fetch discussions");
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async (discussionId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${backendURL}/api/discussions/getDiscussionComments/${discussionId}`
      );
      setComments(response.data.comments);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch comments");
      toast.error("Failed to fetch comments");
    } finally {
      setLoading(false);
    }
  };

  // Delete Operations
  const handleDeleteGroup = async (groupId) => {
    try {
      await axios.delete(`${backendURL}/api/groups/deleteGroup/${groupId}`, {
        data: { email: email },
      });
      setGroups(groups.filter((g) => g._id !== groupId));
      toast.success("Group deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete group");
    }
  };

  const handleDeleteDiscussion = async (discussionId) => {
    try {
      await axios.delete(
        `${backendURL}/api/groups/deleteDiscussion/${discussionId}`
      );
      setDiscussions(discussions.filter((d) => d._id !== discussionId));
      toast.success("Discussion deleted successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete discussion"
      );
    }
  };

  const handleDeleteComment = async (discussionId, commentId) => {
    try {
      await axios.delete(
        `${backendURL}/api/discussions/delete/${discussionId}/comments/${commentId}`,
        {
          data: { email: userInfo.user.email },
        }
      );
      setComments(comments.filter((c) => c._id !== commentId));
      toast.success("Comment deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete comment");
    }
  };

  // UI Event Handlers
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 0) fetchGroups();
    if (newValue === 1) fetchAllDiscussions();
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
    try {
      if (deleteType === "group") {
        await handleDeleteGroup(itemToDelete._id);
      } else if (deleteType === "discussion") {
        await handleDeleteDiscussion(itemToDelete._id);
      } else if (deleteType === "comment") {
        await handleDeleteComment(selectedDiscussion._id, itemToDelete._id);
      }
      handleCloseDeleteDialog();
    } catch (error) {
      toast.error("Delete operation failed");
    }
  };

  // Initial Data Load
  useEffect(() => {
    fetchGroups();
    fetchAllDiscussions();
  }, []);

  // Loading and Error UI
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Link to="/DashBoard/Admin/CreateGroup">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20%] mid:w-[30%] py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-3 mb-7">
          <span className="flex whitespace-nowrap">
            <BiMessageSquareAdd className="mr-2" size={20} />
            Create Group
          </span>
        </button>
      </Link>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Groups" />
          <Tab label="Discussions" />
          <Tab label="Comments" />
        </Tabs>
      </Box>

      {/* Groups Table */}
      {tabValue === 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Groupname</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups.map((group) => (
                <TableRow key={group._id}>
                  <TableCell>{group.Groupname}</TableCell>
                  <TableCell>
                    <div
                      dangerouslySetInnerHTML={{ __html: group.description }}
                    />
                  </TableCell>
                  <TableCell>{group.members?.length || 0}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setSelectedGroup(group);
                        fetchDiscussionsByGroup(group._id);
                        setTabValue(1);
                      }}>
                      View Discussions
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleOpenDeleteDialog(group, "group")}
                      color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Discussions Table */}
      {tabValue === 1 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {discussions.map((discussion) => (
                <TableRow key={discussion._id}>
                  <TableCell>{discussion.title}</TableCell>
                  <TableCell>{discussion.content}</TableCell>
                  <TableCell>{discussion.username}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setSelectedDiscussion(discussion);
                        fetchComments(discussion._id);
                        setTabValue(2);
                      }}>
                      View Comments
                    </Button>
                    <Button
                      onClick={() =>
                        handleOpenDeleteDialog(discussion, "discussion")
                      }
                      color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Comments Table */}
      {tabValue === 2 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Content</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment) => (
                <TableRow key={comment._id}>
                  <TableCell>{comment.content}</TableCell>
                  <TableCell>{comment.username}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleOpenDeleteDialog(comment, "comment")}
                      color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
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
    </Box>
  );
};

export default AdminGroupDetails;
