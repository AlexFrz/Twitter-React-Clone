import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "./Post.css";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_Z3rRipLOaZ9JJo23UN4Hed8zzkZFzoNcSkuVN=s192-c-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Alex Frezoul{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @iamAleph
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>It's decided: in september, I go to India in my new van!</p>
          </div>
        </div>
        <img
          src="https://nitrocdn.com/DmmsjduQSVcDtLLVxJWFXDaoQGLJWRsb/assets/static/source/wp-content/uploads/2019/04/908e310b98701c48f911c33d747ffc2e.Vanlife-embracing-the-unknown-sunset-drive_1080x810-1024x768.jpg"
          alt=""
        />

        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
