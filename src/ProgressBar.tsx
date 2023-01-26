import React from "react";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="allprogress">
      <div
        className="progress"
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        style={{
          width: `${props.progress}%`,
        }}
      />
    </div>
  );
}
