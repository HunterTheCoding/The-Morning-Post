
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len: number): string {
  let result = '';
  if (result) return result;
  const chars =
    '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  let i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url: string = window.location.href): URLSearchParams {
  const urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const LiveSection = () => {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  const sharedLinks: { name: string; url: string }[] = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}&role=Cohost`,
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}&role=Audience`,
  });

  // generate Kit Token
  const appID = 1805612153;
  const serverSecret = '2c896817e7eeb5280f80cae21223f1dc';
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    randomID(5),
    randomID(5)
  );

  // start the call
  const myMeeting = async (element: HTMLDivElement | null): Promise<void> => {
    if (!element) return;

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };

  return (
    <div
      ref={myMeeting}
    className='min-h-screen w-full'
    ></div>
  );
}
export default LiveSection;
