// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Snackbar, Alert, Grid } from "@mui/material";
// import {
//   Typography,
//   Box,
//   Chip,
//   Divider,
//   Button,
//   TextField,
//   IconButton,
//   Avatar,
//   List,
//   ListItem,
//   ListItemText,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Card,
//   CardContent,
//   CardMedia,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   ThumbUp,
//   Edit,
//   Delete,
//   Send,
//   ChatBubbleOutline,
//   MoreVert,
//   Close,
//   Reply,
//   Margin,
// } from "@mui/icons-material";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
// import { format } from "date-fns";
// import { formatDistanceToNow } from "date-fns";
// import moment from "moment";
// import { styled } from "@mui/system";
// // import "../index.css";

// const backendURL = import.meta.env.VITE_BACKEND_URL;

// const DarkBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "gray",
//   color: "#ffffff",
//   borderRadius: "8px",
//   padding: "16px",
//   marginBottom: "16px",
//   border: "1px solid black",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#3e3e3e",
//   color: "#ffffff",
//   "&:hover": {
//     backgroundColor: "black",
//   },
// }));

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   color: "#ffffff",
// }));

// const RelatedPostCard = styled(Card)(({ theme }) => ({
//   backgroundColor: "#2e2e2e",
//   color: "#ffffff",
//   height: "100%",
// }));

// export const ExpandableCommentInput = ({
//   onSubmit,
//   userAvatar,
//   commentsCount,
//   postId,
//   userId,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [comment, setComment] = useState("");

//   const handleExpand = () => {
//     setIsExpanded(true);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (comment.trim()) {
//       onSubmit(comment);
//       setComment("");
//       setIsExpanded(false);
//     }
//   };

//   return (
//     <Box sx={{ mt: 2, width: "100%" }}>
//       {commentsCount > 0 && (
//         <Box
//           display="flex"
//           alignItems="center" // Aligns items vertically centered
//           marginBottom={2}
//           marginLeft={1}
//         >
//           <ChatBubbleOutline style={{ marginRight: 4 }} />{" "}
//           {/* Space between icon and text */}
//           <Typography variant="body2">{commentsCount} Comments</Typography>
//         </Box>
//       )}
//       {!isExpanded && (
//         <Box
//           onClick={handleExpand}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             borderRadius: "9px",
//             padding: "8px 16px",
//             cursor: "pointer",
//             border: "1px solid gray",
//             m: 1,
//             p: 2,
//             marginBottom: "20px",
//             "&:hover": {
//               transition: "all 0.3s ease",
//               border: "2px solid gray",
//             },
//           }}
//         >
//           <Avatar
//             src={userAvatar}
//             sx={{ width: 32, height: 32, marginRight: "12px" }}
//           />
//           <Typography
//             sx={{
//               color: "#808080",
//               fontSize: "14px",
//               fontWeight: 500,
//             }}
//           >
//             Share your thoughts
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Typography
//             sx={{
//               color: "#808080",
//               fontSize: "14px",
//               fontWeight: 500,
//               backgroundColor: "",
//               borderColor: "#2a2a2a",
//               borderWidth: "1px",
//               borderRadius: "4px",
//               padding: "4px 8px",
//             }}
//           >
//             Post
//           </Typography>
//         </Box>
//       )}

//       {isExpanded && (
//         <DarkBox>
//           <Box display="flex" alignItems="flex-start" marginBottom={2}>
//             <Avatar src={userAvatar} sx={{ marginRight: 1 }} />
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               placeholder="Share your thoughts"
//               value={comment}
//               onChange={handleCommentChange}
//               variant="outlined"
//               sx={{
//                 backgroundColor: "white",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "white" },
//                   "&:hover fieldset": { borderColor: "white" },
//                   "&.Mui-focused fieldset": { borderColor: "white" },
//                 },
//                 "& .MuiInputBase-input": { color: "black" },
//               }}
//             />
//           </Box>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <StyledButton variant="contained" onClick={handleSubmit}>
//               Post
//             </StyledButton>
//           </Box>
//         </DarkBox>
//       )}
//     </Box>
//   );
// };

// export default function DiscussionPage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [postId, setPostId] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");
//   const { profile } = useSelector((state) => state.profiles);
//   const currentUser = useSelector((state) => state.auth);
//   const userId = currentUser?.userInfo?.user?._id;
//   const email = currentUser?.userInfo?.user?.email;
//   const name = profile?.username;
//   const image = profile?.image;
//   const [likesCount, setLikesCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);

//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editedCommentContent, setEditedCommentContent] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedCommentId, setSelectedCommentId] = useState(null);
//   const [showAllComments, setShowAllComments] = useState(false);
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//   const [commentToDeleteId, setCommentToDeleteId] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [comment, setComment] = useState("");

//   const handleMenuOpen = (event, commentId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedCommentId(commentId);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedCommentId(null);
//   };

//   const toggleShowAllComments = () => {
//     setShowAllComments(!showAllComments);
//   };

//   const displayedComments = showAllComments ? comments : comments.slice(0, 5);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`${backendURL}/api/getPostBySlug/${slug}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch post");
//         }
//         const data = await response.json();
//         setPost(data);
//         setPostId(data._id);
//         setLikesCount(data.likes.length || 0);
//         setIsLiked(data.isLiked || false);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [slug]);

//   const handleLike = async () => {
//     try {
//       const response = await fetch(`${backendURL}/api/likePost/${postId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId: currentUser.userInfo.user._id }),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to like post");
//       }
//       const data = await response.json();
//       setLikesCount(data.likesCount);
//       setIsLiked(data.isLiked);
//       setSnackbarMessage(data.message);
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error liking post:", error);
//       setSnackbarMessage("Failed to like post.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleCommentSubmit = async (newComment) => {
//     try {
//       const commentData = {
//         content: newComment,
//         postId: postId,
//         userId: userId,
//       };

//       const response = await fetch(`${backendURL}/api/createComment`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(commentData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create comment");
//       }

//       const newCommentObj = await response.json();

//       const commentWithUserData = {
//         ...newCommentObj,
//         userId: {
//           _id: userId,
//           username: name,
//           image: image,
//         },
//       };

//       setComments([...comments, commentWithUserData]);

//       setSnackbarMessage("Comment submitted successfully!");
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error submitting comment:", error);
//       setSnackbarMessage("Failed to submit comment.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const fetchPostComments = async (postId) => {
//     try {
//       const response = await fetch(
//         `${backendURL}/api/getPostComments/${postId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch comments");
//       }
//       const data = await response.json();

//       // Ensure each comment has user details
//       const commentsWithUsers = await Promise.all(
//         data.map(async (comment) => {
//           if (!comment.userId || typeof comment.userId === "string") {
//             const userResponse = await fetch(
//               `${backendURL}/api/users/${comment.userId}`
//             );
//             const userData = await userResponse.json();
//             return {
//               ...comment,
//               userId: {
//                 _id: userData._id,
//                 username: userData.username,
//                 image: userData.image,
//               },
//             };
//           }
//           return comment;
//         })
//       );

//       setComments(commentsWithUsers);
//       console.log(commentsWithUsers, "getPostComments");
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   console.log(comments);
//   useEffect(() => {
//     if (postId) {
//       fetchPostComments(postId);
//     }
//   }, [postId]);

//   const handleCommentEdit = async (commentId, newContent) => {
//     try {
//       const response = await fetch(
//         `${backendURL}/api/editComment/${commentId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ content: newContent }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to edit comment");
//       }

//       const updatedComment = await response.json();

//       setComments(
//         comments.map((comment) =>
//           comment._id === commentId ? updatedComment : comment
//         )
//       );

//       setEditingCommentId(null);
//       setEditedCommentContent("");

//       // Trigger success Snackbar
//       setSnackbarMessage("Comment edited successfully!");
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error editing comment:", error);

//       // Trigger error Snackbar
//       setSnackbarMessage("Failed to edit comment.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleCommentDelete = async (commentId) => {
//     try {
//       const response = await fetch(
//         `${backendURL}/api/deleteComment/${commentId}`,
//         {
//           method: "DELETE",
//           headers: {},
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to delete comment");
//       }

//       setComments(comments.filter((comment) => comment._id !== commentId));

//       // Trigger success Snackbar
//       setSnackbarMessage("Comment deleted successfully!");
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error deleting comment:", error);

//       // Trigger error Snackbar
//       setSnackbarMessage("Failed to delete comment.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleEditClick = (comment) => {
//     setEditingCommentId(comment._id);
//     setEditedCommentContent(comment.content);
//   };

//   const handleCancelEdit = () => {
//     setEditingCommentId(null);
//     setEditedCommentContent("");
//   };

//   const handleDeleteClick = (commentId) => {
//     setCommentToDeleteId(commentId);
//     setDeleteDialogOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (commentToDeleteId) {
//       handleCommentDelete(commentToDeleteId);
//       setDeleteDialogOpen(false);
//       setCommentToDeleteId(null);
//     }
//   };

//   const handleDeleteCancel = () => {
//     setDeleteDialogOpen(false);
//     setCommentToDeleteId(null);
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   const handleCommentLike = async (commentId) => {
//     try {
//       const url = `${backendURL}/api/likeComment/${commentId}`;
//       console.log("Attempting to like comment at URL:", url);

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId: currentUser.userInfo.user._id }),
//       });

//       if (!response.ok) {
//         console.error("Response status:", response.status);
//         console.error("Response text:", await response.text());
//         throw new Error("Failed to like comment");
//       }

//       const updatedComment = await response.json();

//       // Ensure the updated comment has user data
//       const updatedCommentWithUserData = {
//         ...updatedComment,
//         userId: comments.find((comment) => comment._id === commentId)
//           ?.userId || {
//           _id: userId,
//           username: name,
//           image: image,
//         },
//       };

//       setComments(
//         comments.map((comment) =>
//           comment._id === commentId ? updatedCommentWithUserData : comment
//         )
//       );

//       setSnackbarMessage(
//         updatedComment.likes.includes(userId)
//           ? "Comment liked!"
//           : "Comment unliked!"
//       );
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error liking comment:", error);
//       setSnackbarMessage("Failed to like comment.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   if (loading) return <Typography>Loading...</Typography>;
//   if (error) return <Typography color="error">{error}</Typography>;
//   if (!post) return <Typography>Post not found</Typography>;
//   console.log(post, "post details");

//   return (
//     <Grid container spacing={3} sx={{ px: { xs: 2, md: 4 }, py: 11.5 }}>
//       <Grid item xs={12} md={8}>
//         <Box sx={{ maxWidth: "100%", margin: "auto" }}>
//           {post.image && (
//             <Box
//               component="img"
//               src={`${backendURL}${post.image}`}
//               alt="Post image"
//               sx={{
//                 width: "100%",
//                 height: {
//                   xs: "60vw",
//                   sm: "50vw",
//                   md: "35vw",
//                   lg: "35vw",
//                 },
//                 borderRadius: "4px",
//                 marginBottom: "1rem",
//                 objectFit: "cover",
//               }}
//             />
//           )}

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               width: "100%",
//               mb: 2,
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Avatar
//                 src={
//                   post.authorId?.image
//                     ? `${backendURL}${post.authorId.image}`
//                     : "/default-avatar.jpg"
//                 }
//                 sx={{ width: 30, height: 30, mr: 2 }}
//               />
//               <Typography variant="subtitle1" sx={{ mr: 2 }}>
//                 {post.authorId?.name || "Unknown Author"}
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 color="text.secondary"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   "&::before": {
//                     content: "'|'",
//                     mx: 1,
//                   },
//                 }}
//               >
//                 {moment(post.createdAt).format("MMMM D, YYYY")}
//               </Typography>
//             </Box>
//             {/* <Chip label={post.category} /> */}
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               mb: 2,
//             }}
//           >
//             <Typography variant="h4" gutterBottom>
//               {post.title}
//             </Typography>
//           </Box>

//           <ReactQuill
//             value={post.content || ""}
//             readOnly={true}
//             theme="bubble"
//             style={{ padding: "-5px" }} // This removes the padding
//           />

//           <Box sx={{ display: "flex", alignItems: "center", mt: 3, mb: 3 }}>
//             <IconButton onClick={handleLike}>
//               <ThumbUp color={isLiked ? "primary" : "inherit"} />
//             </IconButton>
//             <Typography variant="body2">{likesCount} likes</Typography>
//           </Box>

//           <Divider sx={{ mb: 3 }} />

//           <ExpandableCommentInput
//             onSubmit={handleCommentSubmit}
//             userAvatar={`${backendURL}/uploads/${profile?.image}`}
//             commentsCount={comments.length}
//             postId={postId}
//             userId={userId}
//           />

//           <Box sx={{ width: "100%", bgcolor: "#f5f5f5", p: 2 }}>
//             {comments.map((comment) => (
//               <Box
//                 key={comment.id}
//                 sx={{ mb: 2, bgcolor: "white", borderRadius: 1, p: 2 }}
//               >
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   {/* Avatar */}
//                   <Avatar
//                     src={`${backendURL}/uploads/${profile?.image}`}
//                     alt={comment.username}
//                     sx={{ width: 32, height: 32, mr: 1 }}
//                   />

//                   {/* Parent container with space between username/timestamp and the MoreVert icon */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       mb: 1,
//                       width: "100%",
//                     }}
//                   >
//                     {/* Text box containing the username and timestamp */}
//                     <Box sx={{ display: "flex", flexDirection: "row" }}>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{ fontWeight: "light" }}
//                       >
//                         {comment.userId?.username || "Anonymous"}
//                       </Typography>

//                       <Typography
//                         variant="caption"
//                         sx={{ marginLeft: 1 }}
//                         color="text.secondary"
//                       >
//                         <span className="mx-1">-</span>
//                         {formatDistanceToNow(new Date(comment.createdAt), {
//                           addSuffix: true,
//                         })}
//                       </Typography>
//                     </Box>

//                     {/* MoreVert icon button aligned to the right */}
//                     {currentUser?.userInfo?.user &&
//                       (currentUser.userInfo.user._id === comment.userId?._id ||
//                         currentUser.userInfo.user.isAdmin) && (
//                         <IconButton
//                           size="small"
//                           onClick={(event) =>
//                             handleMenuOpen(event, comment._id)
//                           }
//                         >
//                           <MoreVert />
//                         </IconButton>
//                       )}
//                   </Box>
//                 </Box>

//                 {editingCommentId === comment._id ? (
//                   <Box sx={{ width: "100%" }}>
//                     <TextField
//                       fullWidth
//                       multiline
//                       rows={3}
//                       value={editedCommentContent}
//                       onChange={(e) => setEditedCommentContent(e.target.value)}
//                       variant="outlined"
//                       sx={{ mb: 1 }}
//                     />
//                     <Button
//                       onClick={() =>
//                         handleCommentEdit(comment._id, editedCommentContent)
//                       }
//                       sx={{ mr: 1 }}
//                     >
//                       Save
//                     </Button>
//                     <Button onClick={handleCancelEdit}>Cancel</Button>
//                   </Box>
//                 ) : (
//                   <Typography variant="body1" sx={{ mb: 1, width: "100%" }}>
//                     {comment.content}
//                   </Typography>
//                 )}
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <IconButton
//                     onClick={() => handleCommentLike(comment._id)}
//                     size="small"
//                   >
//                     <ThumbUp
//                       color={
//                         comment.likes.includes(currentUser?.userInfo?.user?._id)
//                           ? "primary"
//                           : "inherit"
//                       }
//                       fontSize="small"
//                     />
//                   </IconButton>
//                   <Typography variant="caption" sx={{ ml: 1 }}>
//                     {comment.likes.length} likes
//                   </Typography>
//                 </Box>
//               </Box>
//             ))}
//           </Box>

//           {comments.length > 5 && (
//             <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//               <Button onClick={toggleShowAllComments}>
//                 {showAllComments ? "Show Less" : "Show More"}
//               </Button>
//             </Box>
//           )}
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem
//               onClick={() =>
//                 handleEditClick(
//                   comments.find((c) => c._id === selectedCommentId)
//                 )
//               }
//             >
//               <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
//             </MenuItem>
//             <MenuItem onClick={() => handleDeleteClick(selectedCommentId)}>
//               <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
//             </MenuItem>
//           </Menu>

//           <Divider sx={{ my: 4 }} />
//         </Box>
//       </Grid>

//       <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
//         <DialogTitle>Are you sure you want to delete this comment?</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Confirm delete or cancel</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleDeleteCancel}
//             startIcon={<Close />}
//             color="secondary"
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDeleteConfirm}
//             startIcon={<Delete />}
//             color="error"
//           >
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={4000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbarSeverity}
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Grid>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Divider,
  Button,
  TextField,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { ThumbUp, Edit, Delete, Send, MoreVert } from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const GroupDiscussionPage = () => {
  const { slug } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const currentUser = useSelector((state) => state.auth);
  const userId = currentUser?.userInfo?.user?._id;
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editedReplyContent, setEditedReplyContent] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedReplyId, setSelectedReplyId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [replyToDeleteId, setReplyToDeleteId] = useState(null);
  // console.log("");

  const safeFormatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid date";
      }
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Unknown date";
    }
  };

  const handleLikeDiscussion = async () => {
    try {
      const isLiked = discussion.likes.includes(userId);
      const action = isLiked ? "unlike" : "like";

      const response = await fetch(
        `${backendURL}/api/discussions/${discussion._id}/likeDiscussion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, action }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to like/unlike discussion");
      }

      const data = await response.json();

      setDiscussion((prevDiscussion) => ({
        ...prevDiscussion,
        likes: data.likes,
      }));

      setSnackbarMessage(data.message);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error liking/unliking discussion:", error);
      setSnackbarMessage("Failed to like/unlike discussion.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const fetchDiscussion = async () => {
    try {
      const response = await fetch(
        `${backendURL}/api/discussions/getDiscussionBySlug/${slug}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch discussion");
      }
      const data = await response.json();
      setDiscussion(data);
      console.log("Fetched discussion data:", data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching discussion:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDiscussionReplies = async () => {
    if (!discussion || !discussion._id) return;

    try {
      const response = await fetch(
        `${backendURL}/api/discussions/getDiscussionComments/${discussion._id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch discussion comments");
      }
      const data = await response.json();
      setReplies(data.comments);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchDiscussion();
  }, [slug]);

  useEffect(() => {
    if (discussion) {
      fetchDiscussionReplies();
    }
  }, [discussion]);

  const handleCommentSubmit = async () => {
    try {
      const replyData = {
        content: newReply,
        authorId: userId,
      };
      const response = await fetch(
        `${backendURL}/api/discussions/commentDiscussion/${discussion._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(replyData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create reply");
      }

      const newReplyObj = await response.json();

      // Update the local state with the new reply
      setReplies((prevReplies) => [...prevReplies, newReplyObj]);

      // Fetch updated discussion data to reflect the new comment count
      await fetchDiscussion();

      setNewReply("");
      setSnackbarMessage("Reply submitted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error submitting reply:", error);
      setSnackbarMessage("Failed to submit reply.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleReplyEdit = async (replyId, newContent) => {
    try {
      const response = await fetch(
        `${backendURL}/api/discussions/${discussion._id}/comments/${replyId}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newContent,
            userId: userId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit reply");
      }

      await fetchDiscussion();

      setEditingReplyId(null);
      setEditedReplyContent("");
      setSnackbarMessage("Reply edited successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error editing reply:", error);
      setSnackbarMessage("Failed to edit reply.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleReplyDelete = async (replyId) => {
    try {
      const response = await fetch(
        `${backendURL}/api/discussions/${discussion._id}/comments/${replyId}/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete reply");
      }

      setReplies((prevReplies) =>
        prevReplies.filter((reply) => reply._id !== replyId)
      );
      setSnackbarMessage("Reply deleted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error deleting reply:", error);
      setSnackbarMessage("Failed to delete reply.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      const comment = replies.find((reply) => reply._id === commentId);
      const action = comment.likes.includes(userId) ? "unlike" : "like";

      const response = await fetch(
        `${backendURL}/api/discussions/${discussion._id}/comments/${commentId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, action }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to like/unlike comment");
      }

      const updatedComment = await response.json();

      // Update the local state with the updated comment
      setReplies((prevReplies) =>
        prevReplies.map((reply) =>
          reply._id === commentId
            ? { ...reply, likes: updatedComment.likes }
            : reply
        )
      );

      setSnackbarMessage(updatedComment.message);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error liking/unliking comment:", error);
      setSnackbarMessage("Failed to like/unlike comment.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleMenuOpen = (event, replyId) => {
    setAnchorEl(event.currentTarget);
    setSelectedReplyId(replyId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedReplyId(null);
  };

  const handleEditClick = (reply) => {
    setEditingReplyId(reply._id);
    setEditedReplyContent(reply.content);
    handleMenuClose();
  };

  const handleDeleteClick = (replyId) => {
    setReplyToDeleteId(replyId);
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    if (replyToDeleteId) {
      handleReplyDelete(replyToDeleteId);
      setDeleteDialogOpen(false);
      setReplyToDeleteId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setReplyToDeleteId(null);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!discussion) return <Typography>Discussion not found</Typography>;

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {discussion.title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          src={`${backendURL}${discussion.authorId?.image}`}
          sx={{
            mr: 1,
            width: 25,
            height: 25,
            borderRadius: "50%",
          }}
        />
        <Typography variant="subtitle1" sx={{ mr: 1 }}>
          {discussion.author?.username || "Anonymous"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {safeFormatDate(discussion.createdAt)}
        </Typography>
      </Box>
      <Typography variant="body1" paragraph>
        {discussion.content}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton onClick={handleLikeDiscussion}>
          <ThumbUp
            color={
              Array.isArray(discussion.likes) &&
              discussion.likes.includes(userId)
                ? "primary"
                : "inherit"
            }
          />
        </IconButton>
        <Typography variant="body2">
          {Array.isArray(discussion.likes) ? discussion.likes.length : 0} likes
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Typography variant="h7" gutterBottom>
        Comments ({discussion?.comments.length || 0})
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        placeholder="Write your reply..."
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Send />}
        onClick={handleCommentSubmit}
        disabled={!newReply.trim()}
      >
        Post Reply
      </Button>
      <List>
        {replies.map((reply) => (
          <ListItem key={reply._id} alignItems="flex-start" divider>
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={`${backendURL}${reply.author?.image}`}
                      sx={{
                        mr: 1,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "14px",
                        color: "gray",
                        fontWeight: "600",
                      }}
                    >
                      {reply.author?.username || "Anonymous"}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {safeFormatDate(reply.createdAt)}
                  </Typography>
                </Box>
              }
              secondary={
                editingReplyId === reply._id ? (
                  <Box>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      value={editedReplyContent}
                      onChange={(e) => setEditedReplyContent(e.target.value)}
                      variant="outlined"
                      sx={{ my: 1 }}
                    />
                    <Button
                      onClick={() =>
                        handleReplyEdit(reply._id, editedReplyContent)
                      }
                      sx={{ mr: 1 }}
                    >
                      Save
                    </Button>
                    <Button onClick={() => setEditingReplyId(null)}>
                      Cancel
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <Typography>{reply.content}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <IconButton
                        onClick={() => handleLikeComment(reply._id)}
                        size="small"
                      >
                        <ThumbUp
                          fontSize="small"
                          color={
                            reply.likes?.includes(userId)
                              ? "primary"
                              : "inherit"
                          }
                        />
                      </IconButton>
                      <Typography variant="caption">
                        {reply.likes?.length} likes
                      </Typography>
                    </Box>
                  </Box>
                )
              }
            />
            {currentUser?.userInfo?.user &&
              (currentUser?.userInfo?.user._id === reply.author?._id ||
                currentUser.userInfo.user.isAdmin) && (
                <IconButton
                  edge="end"
                  onClick={(event) => handleMenuOpen(event, reply._id)}
                >
                  <MoreVert />
                </IconButton>
              )}
          </ListItem>
        ))}
      </List>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() =>
            handleEditClick(replies.find((r) => r._id === selectedReplyId))
          }
        >
          <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={() => handleDeleteClick(selectedReplyId)}>
          <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Reply</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this reply? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GroupDiscussionPage;
