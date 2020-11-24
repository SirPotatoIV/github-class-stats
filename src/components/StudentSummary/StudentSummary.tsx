import React from 'react';

type studentSummaryProps = {
  studentProfile: any;
};

export default function StudentSummary({ studentProfile }: studentSummaryProps) {
  return (
    <div>
      <h1>Jake OToole</h1>
      <img src={studentProfile.avatar_url} />
      <p>studentProfile</p>
    </div>
  );
}
