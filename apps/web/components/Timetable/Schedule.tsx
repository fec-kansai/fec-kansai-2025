import { fieldParam, formBaseUrl, isStartedSurvey } from "@/app/consts/session";
import { trackA, trackB, tracks } from "@/app/consts/speakers";
import { Button } from "@workspace/ui";

function getSessionIdFromUrl(url: string) {
  const segments = url.split("/");
  return segments[segments.length - 1] || "";
}

interface Session {
  title: string;
  speaker?: string;
  startTime: string;
  endTime: string;
  url?: string;
  type?: "session" | "lt";
}

interface SessionCardProps {
  session: Session;
  color: "red" | "green"; // e.g. "red" or "green"
  trackLabel?: string;
  isMobile?: boolean;
}

export function SessionCard({
  session,
  color,
  trackLabel,
  isMobile = false,
}: SessionCardProps) {
  const sessionId = session.url ? getSessionIdFromUrl(session.url) : null;
  const formUrl =
    sessionId &&
    `${formBaseUrl}&${fieldParam}=${encodeURIComponent(sessionId)}`;

  const isSpecialSession = ["ランチ", "転換", "懇親会"].some((keyword) =>
    session.title.includes(keyword),
  );

  return (
    <div
      className="relative w-full text-left p-4 border rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
      style={{ borderColor: `var(--neon-${color})` }}
    >
      {session.type === "lt" && (
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute right-[-40px] top-[10px] w-[100px] bg-[#f8aee5] text-black text-[10px] font-bold text-center py-1 rotate-45 shadow-sm">
            LT
          </div>
        </div>
      )}

      {isMobile && trackLabel && (
        <div className="flex items-center mb-2">
          <span
            className="text-white text-base px-2 py-1 rounded-full mr-2"
            style={{ color: `var(--neon-${color})` }}
          >
            {trackLabel}
          </span>
          <span className="text-base text-gray-300">
            {session.startTime} - {session.endTime}
          </span>
        </div>
      )}

      {!isMobile && (
        <div className="text-base text-gray-300 mb-2">
          {session.startTime} - {session.endTime}
        </div>
      )}

      <div
        className={`text-lg font-bold ${isSpecialSession ? "text-white" : ""}`}
      >
        {session.title}
      </div>

      {session.speaker && (
        <div className="text-base text-gray-200 mt-1">{session.speaker}</div>
      )}

      <div className="mt-3 flex gap-4 flex-wrap">
        {session.url && (
          <Button
            className="text-sm !shadow-none"
            variant={color === "red" ? "neon-red" : "neon-green"}
            asChild
          >
            <a
              href={session.url}
              className="shadow-none"
              target="_blank"
              rel="noreferrer"
            >
              詳細を見る
            </a>
          </Button>
        )}
        {isStartedSurvey && formUrl && (
          <Button
            className="text-sm !shadow-none"
            variant={color === "red" ? "neon-red" : "neon-green"}
            asChild
          >
            <a href={formUrl} target="_blank" rel="noreferrer">
              アンケートを記入する
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

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

      {combinedSessions.map((item) => (
        <div key={item.startTime} className="mb-6 sm:mb-4">
          <div className="hidden md:grid grid-cols-3 gap-4 border-b border-gray-200 py-4">
            <div className="flex items-start justify-center pt-4">
              <div className="text-center font-bold text-lg px-3 py-2 rounded-lg">
                {item.startTime}
              </div>
            </div>

            <div className="space-y-4">
              {item.trackA.length > 0 ? (
                item.trackA.map((session) => (
                  <SessionCard
                    key={`A-${session.speaker}`}
                    session={session}
                    color="red"
                  />
                ))
              ) : (
                <div className="p-4 text-center text-gray-400 italic">
                  セッションなし
                </div>
              )}
            </div>

            <div className="space-y-4">
              {item.trackB.length > 0 ? (
                item.trackB.map((session) => (
                  <SessionCard
                    key={`B-${session.speaker}`}
                    session={session}
                    color="green"
                  />
                ))
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
              {item.trackA.map((session) => (
                <SessionCard
                  key={`A-${session.speaker}`}
                  session={session}
                  color="red"
                  trackLabel={tracks.trackA}
                  isMobile
                />
              ))}
              {item.trackB.map((session) => (
                <SessionCard
                  key={`B-${session.speaker}`}
                  session={session}
                  color="green"
                  trackLabel={tracks.trackB}
                  isMobile
                />
              ))}

              {item.trackA.length === 0 && item.trackB.length === 0 && (
                <div className="p-4 text-center text-gray-400 italic border rounded-lg">
                  この時間帯にはセッションがありません
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
