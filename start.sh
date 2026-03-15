#!/bin/bash
# Flowcycles — spuštění dev serveru s CMS
# Použití: ./start.sh

echo "🚲 Flowcycles Dev Server"
echo "========================"

# Kill any existing processes
kill -9 $(lsof -t -i :3000 -i :4001) 2>/dev/null
rm -f .next/dev/lock
sleep 1

echo "🦙 Spouštím Tina CMS + Next.js..."
echo ""
echo "  Web:   http://localhost:3000"
echo "  Admin: http://localhost:3000/admin/index.html"
echo ""

npx tinacms dev -c "npx next dev --port 3000"
