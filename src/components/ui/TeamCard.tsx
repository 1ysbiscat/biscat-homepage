import React from 'react';
import './TeamCard.css';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-avatar">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <div className="avatar-placeholder">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="team-info">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-position">{member.position}</p>
        <p className="team-bio">{member.bio}</p>
        {member.email && (
          <a href={`mailto:${member.email}`} className="team-email">
            {member.email}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
