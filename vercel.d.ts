declare module '@vercel/node' {
    import { IncomingMessage, ServerResponse } from 'http';
  
    export function createServer(handler: (req: IncomingMessage, res: ServerResponse) => void): any;
    export default createServer;
  }
  