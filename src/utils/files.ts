export async function createFileFromUrl(url: string, filename: string): Promise<File> {
  const response = await fetch(url)
  const contentType = response.headers.get('Content-Type') || undefined
  const data = await response.blob()
  const metadata: FilePropertyBag = {
    type: contentType,
  }
  return new File([data], filename, metadata)
}
