import { ImageEditor } from "@/components/image-editor"
import { DataCompression } from "@/components/data-compression"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Tools & Utilities</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interactive tools for image processing and data compression, useful for medical documentation and file
          management.
        </p>
      </div>

      <Tabs defaultValue="image-editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="image-editor">Image Editor</TabsTrigger>
          <TabsTrigger value="data-compression">Data Compression</TabsTrigger>
        </TabsList>

        <TabsContent value="image-editor">
          <ImageEditor />
        </TabsContent>

        <TabsContent value="data-compression">
          <DataCompression />
        </TabsContent>
      </Tabs>
    </div>
  )
}
