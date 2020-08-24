import React from "react";

export const Logo = (props) => {
  return (
    <svg
      id="the_logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496.008 496"
      height={props.height}
      width={props.width}
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="248"
        x2="248"
        y1="496.004"
        y2=".004"
      >
        <stop offset="0" stop-color="#cb3efd" />
        <stop offset="1" stop-color="#0aca93" />
      </linearGradient>
      <path
        d="m467.648438 240.003906h-51.648438v-24c0-22.054687-17.945312-40-40-40h-8v-144c0-17.648437-14.351562-31.99999975-32-31.99999975h-304c-17.648438 0-32 14.35156275-32 31.99999975v80h48v32h-8c-22.054688 0-40 17.945313-40 40v280h.320312c-.160156 1.207032-.320312 2.425782-.320312 3.648438 0 15.632812 12.71875 28.351562 28.351562 28.351562h365.488282c11.800781 0 22.488281-7.441406 26.585937-18.496094l73.820313-199.3125c1.167968-3.167968 1.761718-6.472656 1.761718-9.832031-.007812-15.640625-12.726562-28.359375-28.359374-28.359375zm-91.648438-48c13.230469 0 24 10.769532 24 24v24h-32v-48zm-24-160v208h-249.839844c-11.800781 0-22.480468 7.441406-26.585937 18.496094l-11.574219 31.265625v-257.761719c0-5.847656-1.695312-11.273437-4.457031-16h276.457031c8.816406 0 16 7.183594 16 16zm-336 64v-64c0-8.816406 7.175781-16 16-16 8.816406 0 16 7.183594 16 16v64zm24 64h8v172.960938l-32 86.398437v-235.359375c0-13.230468 10.769531-24 24-24zm439.230469 112.640625-73.816407 199.296875c-1.78125 4.824219-6.4375 8.0625-11.582031 8.0625h-365.480469c-6.816406 0-12.351562-5.535156-12.351562-12.351562 0-1.472656.257812-2.914063.769531-4.289063l73.816407-199.296875c1.78125-4.824218 6.4375-8.0625 11.574218-8.0625h365.488282c6.816406 0 12.351562 5.535156 12.351562 12.351563 0 1.472656-.257812 2.914062-.769531 4.289062zm-204.175781 191.359375h113.890624l24-48h-113.890624zm33.890624-32h78.109376l-8 16h-78.109376zm27.054688-400h-256v96h256zm-16 80h-224v-64h224zm-72 48h-168v-16h168zm88 32h-256v-16h256zm-48 32h-208v-16h208zm16-16h32v16h-32zm0 0"
        fill="url(#a)"
      />
    </svg>
  );
};
