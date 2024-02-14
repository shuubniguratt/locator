import { use } from "react";
import Link from "next/link";

import type { RouterOutputs } from "@acme/api";

import { HomeGroupBadge } from "~/components/home-group-badge";
import { Meetings } from "~/components/meetings";
import { mapOrder } from "~/lib/mapOrder";

export function GroupList({
  data,
  sortedByDistanceIds,
  isToday,
}: {
  data: Promise<RouterOutputs["group"]["byCitiesAndByWeekday"]>;
  sortedByDistanceIds: Promise<RouterOutputs["location"]["closestGroups"]>;
  isToday: boolean;
}) {
  const initialData = use(data);
  const initialSortedByDistanceIds = use(sortedByDistanceIds).map(
    (item) => item.groupId,
  );

  // consider more
  if (initialData.length === 0) {
    return (
      <div className="flex flex-col items-center pt-32 ">
        <h2>По такому запросу группы не найдены.</h2>
        <p>
          <em>Пока</em> не найдены ...
        </p>
      </div>
    );
  }
  const sortedData = mapOrder(initialData, initialSortedByDistanceIds, "id");

  return (
    <div className="flex w-full flex-col gap-4">
      {sortedData.map(({ days, ...rest }) => {
        return (
          <div key={rest.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {rest.name}
                <HomeGroupBadge id={rest.id} />
              </h2>
              <div className="flex flex-row">
                <p>{`${rest.address?.city}, ${rest.address?.street}`}</p>
                <Link
                  href={`/groups/${rest.id}`}
                  className="btn btn-sm btn-ghost btn-circle"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <hr />
              <Meetings data={days[0]!.meetings} isToday={isToday} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
