import { trackA, trackB, tracks } from "@/app/consts/speakers";

export function Schedule() {
  const uniqueStartTimes = [
    ...new Set([
      ...trackA.map((track) => track.startTime),
      ...trackB.map((track) => track.startTime),
    ]),
  ].sort();

  const combinedSessions = uniqueStartTimes.map((startTime) => ({
    startTime,
    trackA: trackA.filter((track) => track.startTime === startTime),
    trackB: trackB.filter((track) => track.startTime === startTime),
  }));

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <div className="hidden md:grid grid-cols-3 gap-4 mb-4">
        <div className="text-center font-bold text-lg border-b-2 pb-2">
          時間
        </div>
        {Object.values(tracks).map((track) => (
          <div
            key={track}
            className="text-center font-bold text-lg border-b-2 pb-2"
          >
            {track}
          </div>
        ))}
      </div>

      {combinedSessions.map((item) => {
        return (
          <div key={item.startTime} className="mb-6 sm:mb-4">
            <div className="hidden md:grid grid-cols-3 gap-4 border-b border-gray-200 py-4">
              <div className="flex items-start justify-center pt-4">
                <div className="text-center font-bold text-lg px-3 py-2 rounded-lg">
                  {item.startTime}
                </div>
              </div>

              <div className="space-y-4">
                {item.trackA.length > 0 ? (
                  item.trackA.map((session) =>
                    session.url ? (
                      <a
                        key={`A-${session.speaker}`}
                        href={session.url}
                        target="_blank"
                        className="relative block w-full text-left p-4 border rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
                        rel="noreferrer"
                      >
                        {session.type === "lt" && (
                          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                            <div className="absolute right-[-40px] top-[10px] w-[100px] bg-[#f8aee5] text-black text-[10px] font-bold text-center py-1 rotate-45 shadow-sm">
                              LT
                            </div>
                          </div>
                        )}
                        <div className="text-lg font-bold text-[#43deec]">
                          {session.title}
                        </div>
                        <div className="text-sm text-gray-200 mt-1">
                          {session.speaker}
                        </div>
                        <div className="text-xs text-gray-300 mt-2">
                          {session.startTime} - {session.endTime}
                        </div>
                      </a>
                    ) : (
                      <div
                        key={`A-${session.speaker}`}
                        className="w-full text-left p-4 border rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        <div
                          className={`text-lg font-bold ${session.speaker ? "text-[#43deec]" : "text-gray-200"}`}
                        >
                          {session.title}
                        </div>
                        {session.speaker && (
                          <div className="text-sm text-gray-200 mt-1">
                            {session.speaker}
                          </div>
                        )}
                        <div className="text-xs text-gray-300 mt-2">
                          {session.startTime} - {session.endTime}
                        </div>
                      </div>
                    ),
                  )
                ) : (
                  <div className="p-4 text-center text-gray-400 italic">
                    セッションなし
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {item.trackB.length > 0 ? (
                  item.trackB.map((session) =>
                    session.url ? (
                      <a
                        key={`B-${session.speaker}`}
                        href={session.url}
                        target="_blank"
                        className="block w-full text-left p-4 border rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
                        rel="noreferrer"
                      >
                        <div className="text-lg font-bold text-[#43ec62]">
                          {session.title}
                        </div>
                        <div className="text-sm text-gray-200 mt-1">
                          {session.speaker}
                        </div>
                        <div className="text-xs text-gray-300 mt-2">
                          {session.startTime} - {session.endTime}
                        </div>
                      </a>
                    ) : (
                      <div
                        key={`B-${session.speaker}`}
                        className="block w-full text-left p-4 border rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        <div
                          className={`text-lg font-bold ${session.speaker ? "text-[#43deec]" : "text-gray-200"}`}
                        >
                          {session.title}
                        </div>
                        {session.speaker && (
                          <div className="text-sm text-gray-200 mt-1">
                            {session.speaker}
                          </div>
                        )}
                        <div className="text-xs text-gray-300 mt-2">
                          {session.startTime} - {session.endTime}
                        </div>
                      </div>
                    ),
                  )
                ) : (
                  <div className="p-4 text-center text-gray-400 italic">
                    セッションなし
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex justify-center mb-4">
                <div className="px-4 py-2 rounded-lg font-bold text-lg">
                  {item.startTime}
                </div>
              </div>

              <div className="space-y-3">
                {item.trackA.map((session) =>
                  session.url ? (
                    <a
                      href={session.url}
                      target="_blank"
                      key={`A-${session.speaker}`}
                      className="relative block w-full text-left p-4 border rounded-lg active:bg-gray-100 transition-colors duration-200 shadow-sm border-l-4 border-l-blue-500"
                      rel="noreferrer"
                    >
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                          {tracks.trackA}
                        </span>
                        <span className="text-xs text-gray-500">
                          {session.startTime} - {session.endTime}
                        </span>
                      </div>
                      {session.type === "lt" && (
                        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                          <div className="absolute right-[-40px] top-[10px] w-[100px] bg-[#f8aee5] text-black text-[10px] font-bold text-center py-1 rotate-45 shadow-sm">
                            LT
                          </div>
                        </div>
                      )}
                      <div className="text-lg font-bold text-[#43deec] mb-1">
                        {session.title}
                      </div>
                      {session.speaker && (
                        <div className="text-sm text-gray-200">
                          {session.speaker}
                        </div>
                      )}
                    </a>
                  ) : (
                    <div
                      key={`A-${session.speaker}`}
                      className="block w-full text-left p-4 border rounded-lg transition-colors duration-200 shadow-sm border-l-4 border-l-blue-500"
                    >
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                          {tracks.trackA}
                        </span>
                        <span className="text-xs text-gray-500">
                          {session.startTime} - {session.endTime}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[#43deec] mb-1">
                        {session.title}
                      </div>
                      {session.speaker && (
                        <div className="text-sm text-gray-200">
                          {session.speaker}
                        </div>
                      )}
                    </div>
                  ),
                )}

                {item.trackB.map((session) =>
                  session.url ? (
                    <a
                      key={`B-${session.speaker}`}
                      href={session.url}
                      target="_blank"
                      className="block w-full text-left p-4 border rounded-lg active:bg-gray-100 transition-colors duration-200 shadow-sm border-l-4 border-l-green-500"
                      rel="noreferrer"
                    >
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                          {tracks.trackB}
                        </span>
                        <span className="text-xs text-gray-500">
                          {session.startTime} - {session.endTime}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[#43ec62] mb-1">
                        {session.title}
                      </div>
                      {session.speaker && (
                        <div className="text-sm text-gray-200">
                          {session.speaker}
                        </div>
                      )}
                    </a>
                  ) : (
                    <div
                      key={`B-${session.speaker}`}
                      className="block w-full text-left p-4 border rounded-lg active:bg-gray-100 transition-colors duration-200 shadow-sm border-l-4 border-l-green-500"
                    >
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                          {tracks.trackB}
                        </span>
                        <span className="text-xs text-gray-500">
                          {session.startTime} - {session.endTime}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[#43ec62] mb-1">
                        {session.title}
                      </div>
                      {session.speaker && (
                        <div className="text-sm text-gray-200">
                          {session.speaker}
                        </div>
                      )}
                    </div>
                  ),
                )}

                {item.trackA.length === 0 && item.trackB.length === 0 && (
                  <div className="p-4 text-center text-gray-400 italic border rounded-lg">
                    この時間帯にはセッションがありません
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
