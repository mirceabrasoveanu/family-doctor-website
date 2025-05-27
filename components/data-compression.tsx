"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileArchiveIcon as Compress } from "lucide-react"

// Simple Run-Length Encoding implementation
function runLengthEncode(data: string): string {
  if (!data) return ""

  let encoded = ""
  let count = 1

  for (let i = 0; i < data.length; i++) {
    if (i + 1 < data.length && data[i] === data[i + 1]) {
      count++
    } else {
      if (count > 1) {
        encoded += count + data[i]
      } else {
        encoded += data[i]
      }
      count = 1
    }
  }

  return encoded
}

function runLengthDecode(data: string): string {
  if (!data) return ""

  let decoded = ""
  let i = 0

  while (i < data.length) {
    if (i + 1 < data.length && /\d/.test(data[i])) {
      const count = Number.parseInt(data[i])
      const char = data[i + 1]
      decoded += char.repeat(count)
      i += 2
    } else {
      decoded += data[i]
      i++
    }
  }

  return decoded
}

// Simple Huffman-like frequency encoding
function frequencyEncode(data: string): { encoded: string; table: Record<string, string> } {
  if (!data) return { encoded: "", table: {} }

  // Count character frequencies
  const freq: Record<string, number> = {}
  for (const char of data) {
    freq[char] = (freq[char] || 0) + 1
  }

  // Create simple encoding table (most frequent = shortest code)
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])
  const table: Record<string, string> = {}

  sorted.forEach(([char], index) => {
    table[char] = index.toString(2).padStart(Math.ceil(Math.log2(sorted.length)), "0")
  })

  // Encode the data
  let encoded = ""
  for (const char of data) {
    encoded += table[char] + " "
  }

  return { encoded: encoded.trim(), table }
}

export function DataCompression() {
  const [inputData, setInputData] = useState("")
  const [rleResult, setRleResult] = useState("")
  const [huffmanResult, setHuffmanResult] = useState("")
  const [huffmanTable, setHuffmanTable] = useState<Record<string, string>>({})
  const [decodedRle, setDecodedRle] = useState("")

  const handleCompress = () => {
    if (!inputData.trim()) return

    // Run-Length Encoding
    const rleEncoded = runLengthEncode(inputData)
    setRleResult(rleEncoded)

    // Frequency-based encoding (simplified Huffman)
    const { encoded, table } = frequencyEncode(inputData)
    setHuffmanResult(encoded)
    setHuffmanTable(table)

    // Test RLE decoding
    setDecodedRle(runLengthDecode(rleEncoded))
  }

  const calculateCompressionRatio = (original: string, compressed: string): number => {
    if (!original || !compressed) return 0
    return ((original.length - compressed.length) / original.length) * 100
  }

  const clearAll = () => {
    setInputData("")
    setRleResult("")
    setHuffmanResult("")
    setHuffmanTable({})
    setDecodedRle("")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Compress className="h-5 w-5 text-blue-600" />
          <span>Data Compression Algorithms</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="inputData">Input Data</Label>
          <Textarea
            id="inputData"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter text to compress (try repeated characters like 'aaabbbccc' for better RLE results)"
            rows={4}
            className="font-mono"
          />
          <div className="flex gap-2">
            <Button onClick={handleCompress} disabled={!inputData.trim()}>
              <Compress className="h-4 w-4 mr-2" />
              Compress Data
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear All
            </Button>
          </div>
        </div>

        {(rleResult || huffmanResult) && (
          <Tabs defaultValue="rle" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rle">Run-Length Encoding</TabsTrigger>
              <TabsTrigger value="huffman">Frequency Encoding</TabsTrigger>
            </TabsList>

            <TabsContent value="rle" className="space-y-4">
              <div className="space-y-2">
                <Label>Compressed Data (RLE)</Label>
                <Textarea value={rleResult} readOnly rows={3} className="font-mono bg-gray-50" />
                <div className="flex gap-2">
                  <Badge variant="outline">Original: {inputData.length} chars</Badge>
                  <Badge variant="outline">Compressed: {rleResult.length} chars</Badge>
                  <Badge variant={calculateCompressionRatio(inputData, rleResult) > 0 ? "default" : "destructive"}>
                    {calculateCompressionRatio(inputData, rleResult) > 0 ? "Saved" : "Increased"}:{" "}
                    {Math.abs(calculateCompressionRatio(inputData, rleResult)).toFixed(1)}%
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Decompressed Data (Verification)</Label>
                <Textarea value={decodedRle} readOnly rows={3} className="font-mono bg-green-50" />
                <Badge variant={decodedRle === inputData ? "default" : "destructive"}>
                  {decodedRle === inputData ? "✓ Decompression Successful" : "✗ Decompression Failed"}
                </Badge>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">How RLE Works:</h4>
                <p className="text-blue-800 text-sm">
                  Run-Length Encoding replaces sequences of repeated characters with a count and the character. For
                  example, "aaabbb" becomes "3a3b". It works best with data that has many repeated sequences.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="huffman" className="space-y-4">
              <div className="space-y-2">
                <Label>Compressed Data (Frequency-based)</Label>
                <Textarea value={huffmanResult} readOnly rows={3} className="font-mono bg-gray-50" />
                <div className="flex gap-2">
                  <Badge variant="outline">Original: {inputData.length} chars</Badge>
                  <Badge variant="outline">Encoded: {huffmanResult.split(" ").length} codes</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Encoding Table</Label>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Object.entries(huffmanTable).map(([char, code]) => (
                      <div key={char} className="flex justify-between bg-white p-2 rounded text-sm">
                        <span className="font-mono">'{char}'</span>
                        <span className="font-mono text-blue-600">{code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">How Frequency Encoding Works:</h4>
                <p className="text-green-800 text-sm">
                  This simplified version of Huffman coding assigns shorter binary codes to more frequent characters.
                  The most frequent character gets the shortest code, reducing overall data size when the same
                  characters appear often.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        )}

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-medium text-yellow-900 mb-2">💡 Try These Examples:</h4>
          <div className="space-y-1 text-yellow-800 text-sm">
            <p>
              <strong>For RLE:</strong> "aaabbbcccdddeee" or "1111222233334444"
            </p>
            <p>
              <strong>For Frequency:</strong> "hello world" or "compression algorithm"
            </p>
            <p>
              <strong>Medical data:</strong> "patient patient doctor nurse nurse nurse"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
