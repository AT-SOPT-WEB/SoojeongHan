import {
  cardStyle,
  imageStyle,
  closeButtonStyle,
  nameStyle,
  followInfoWrapper,
  followInfoItem,
} from './GithubCard.style';

const GithubCard = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div css={cardStyle}>
      <button css={closeButtonStyle} onClick={onClose}>
        x
      </button>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="깃허브 프로필로 이동"
      >
        <img src={user.avatar_url} alt="프로필 이미지" css={imageStyle} />
      </a>

      {user.name && (
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          css={nameStyle}
        >
          {user.name}
        </a>
      )}
      {user.login && <p css={nameStyle}>{user.login}</p>}
      {user.bio && <p css={nameStyle}>{user.bio}</p>}

      <div css={followInfoWrapper}>
        <div css={followInfoItem}>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
        <div css={followInfoItem}>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
