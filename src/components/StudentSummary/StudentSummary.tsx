import React from 'react';

type studentSummaryProps = {
  studentProfile: any;
};

export default function StudentSummary({ studentProfile }: studentSummaryProps) {
  return (
    <div>
      <h1>{studentProfile.name}</h1>
      <img src={studentProfile.avatar_url} />
      <p>
        GitHub Profile: <a href={studentProfile.html_url}>{studentProfile.html_url}</a>
      </p>
      <p>
        Get Repos: <a href={studentProfile.repos_url}>{studentProfile.repos_url}</a>
      </p>
    </div>
  );
}
