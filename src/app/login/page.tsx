export default function Login() {
  return (
    <div className="flex-1 p-10">
      <a
        href={`https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${
          process.env.NEXT_PUBLIC_JIRA_CLIENT_ID
        }&scope=${
          process.env.NEXT_PUBLIC_JIRA_SCOPES_REQUESTED
        }&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback&state=${crypto.randomUUID()}&response_type=code&prompt=consent`}
        className="cursor-pointer items-center gap-3 rounded-lg border border-gray-50 px-4 py-2 text-left text-gray-50 transition-colors hover:text-gray-200"
      >
        LOGIN
      </a>
    </div>
  )
}

// https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${
//   process.env.NEXT_PUBLIC_JIRA_CLIENT_ID
// }&scope=read%3Ame&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback&state=${crypto.randomUUID()}&response_type=code&prompt=consent`
